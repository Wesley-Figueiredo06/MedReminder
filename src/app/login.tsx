import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityProps,
  FlatList,
} from "react-native";

import { router, Link } from "expo-router";

import { useEffect, useState } from "react";
import { ArrowRight, Heart, Mail, Lock, Eye } from "lucide-react-native";

// import InputButton from "../../components/button";
import { style } from "../assets/styles/style";
import { supabase } from "../utils/supabase";
import { Color } from "expo-router/build/utils/color";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<"email" | "password" | null>(
    null,
  );

  const [todos, setTodos] = useState([]);

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
        <Text style={style.tittle}>MedRemind</Text>

        <Text style={style.paragraph}>
          Sua saúde em boas mãos, um lembrete por vez.
        </Text>
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
          <Text style={{ color: "white" }}>Entrar</Text>
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
        <Text>
          Não tem uma conta?{" "}
          <Link style={style.link} href="/register">
            Cadastre-se
          </Link>
        </Text>
      </View>
    </View>
  );
}
