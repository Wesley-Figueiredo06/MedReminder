import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useEffect, useState } from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
  Easing,
  withSequence,
} from "react-native-reanimated";

import { router, Link } from "expo-router";
import { supabase } from "../utils/supabase";

import { ArrowRight, Heart, Mail, Lock, Eye } from "lucide-react-native";
import { style } from "../assets/styles/style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<
    "email" | "password" | "name" | null
  >(null);
  const translateY = useSharedValue(0);
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
      {
        rotate: `${rotation.value}deg`,
      },
    ],
  }));

  useEffect(() => {
    translateY.value = withRepeat(
      withTiming(-20, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
    rotation.value = withRepeat(
      withSequence(
        withTiming(-6, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(6, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        }),
      ),
      -1,
      true,
    );
  }, []);

  async function handleLogin() {
    setLoading(true);
    try {
      // const { data, error } = await supabase
      //   .from("users")
      //   .select("email, password");
      // console.log(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={style.conteiner}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          top: 50,
        }}
      >
        <Animated.View style={animatedStyle}>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#155DFC",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Heart color="white" size={40} fill="white" absoluteStrokeWidth />
          </View>
        </Animated.View>
        <Text style={style.tittle}>MedRemind</Text>
        <Text style={style.paragraph}>
          Sua saúde em boas mãos, um lembrete por vez.
        </Text>
      </View>

      <Text style={style.label}>Nome Completo</Text>

      <View
        style={[
          style.inputContiner,
          focusedField === "name" && style.inputFocused,
        ]}
      >
        <TextInput
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField(null)}
          style={style.input}
          placeholder="Como devemos te chamar?"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />
      </View>

      <Text style={style.label}>E-mail</Text>

      <View
        style={[
          style.inputContiner,
          focusedField === "email" && style.inputFocused,
        ]}
      >
        <Mail
          style={style.icon}
          size={20}
          color={focusedField === "email" ? "#155DFC" : "#99A1AF"}
        />

        <TextInput
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
          style={style.input}
          placeholder="exemp@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Text style={style.label}>Senha</Text>

      <View
        style={[
          style.inputContiner,
          focusedField === "password" && style.inputFocused,
        ]}
      >
        <Lock
          style={style.icon}
          size={20}
          color={focusedField === "password" ? "#155DFC" : "#99A1AF"}
        />

        <TextInput
          onFocus={() => setFocusedField("password")}
          onBlur={() => setFocusedField(null)}
          style={style.input}
          placeholder="••••••••"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View>
        <TouchableOpacity
          disabled={loading}
          style={style.button}
          onPress={handleLogin}
        >
          <Text style={{ color: "white" }}>Criar Conta</Text>
          <ArrowRight size={15} color="#fff" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: 300,
          height: 300,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={{ flex: 1, top: 239 }}>
          Já possui uma conta?{" "}
          <Link style={style.link} href="/login">
            Faça Login
          </Link>
        </Text>
      </View>
    </View>
  );
}
