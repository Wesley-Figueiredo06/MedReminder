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
import { mockAuth, validateMockCredentials } from "../../mocks/auth";
import { ROUTES } from "../../constants";

import { ArrowRight, Heart, Mail, Lock, Eye } from "lucide-react-native";
import { createAuthStyles } from "../../styles/style";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { useTheme } from "../../contexts/ThemeContext";

export default function Login() {
  const style = useThemedStyles(createAuthStyles);
  const { colors } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [focusedField, setFocusedField] = useState<"email" | "password" | null>(
    null,
  );
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
    setErrorMessage("");
    try {
      const isValid = validateMockCredentials(email, password);

      if (!isValid) {
        setErrorMessage("E-mail ou senha inválidos.");
        return;
      }

      mockAuth.hasSession = true;
      router.replace(ROUTES.home);
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
          <View style={style.logoContainer}>
            <Heart color={colors.white} size={40} fill={colors.white} absoluteStrokeWidth />
          </View>
        </Animated.View>
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
          color={focusedField === "email" ? colors.primaryAccent : colors.placeholder}
        />

        <TextInput
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
          style={style.input}
          placeholderTextColor={colors.placeholder}
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
          color={focusedField === "password" ? colors.primaryAccent : colors.placeholder}
        />

        <TextInput
          onFocus={() => setFocusedField("password")}
          onBlur={() => setFocusedField(null)}
          style={style.input}
          placeholder="••••••••"
          placeholderTextColor={colors.placeholder}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {errorMessage ? (
        <Text style={style.errorText}>{errorMessage}</Text>
      ) : null}

      <View>
        <TouchableOpacity
          disabled={loading}
          style={style.button}
          onPress={handleLogin}
        >
          <Text style={style.buttonText}>Entrar</Text>
          <ArrowRight size={15} color={colors.white} />
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
        <Text style={{ color: colors.textPrimary }}>
          Não tem uma conta?{" "}
          <Link style={style.link} href={ROUTES.register}>
            Cadastre-se
          </Link>
        </Text>
      </View>
    </View>
  );
}
