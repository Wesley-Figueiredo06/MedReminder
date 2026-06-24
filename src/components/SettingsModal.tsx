import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Moon,
  Calendar,
  Settings,
  Pill,
  Bell,
  LogOut,
  Shield,
  CircleQuestionMark,
  MessageSquare,
  ChevronRight,
  User,
} from "lucide-react-native";

export const style = StyleSheet.create({});

type Props = {
  type: "Privacy" | "HelpCenter" | "FeedBack" | "About" | "Exit" | null;
};

export default function SettingsModal({ type }: Props) {
  if (type === "Privacy") {
    return (
      <View>
        <View
          style={{
            backgroundColor: "#D0FAE5",
            width: 40,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            marginTop: 5,
            marginBottom: 8,
            borderRadius: 10,
          }}
        >
          <Shield size={25} color="#009966" />
        </View>
        <Text>
          Seus dados de saúde são criptografados e armazenados de forma segura.
          Não compartilhamos suas informações com terceiros.
        </Text>
      </View>
    );
  }

  if (type === "HelpCenter") {
    return (
      <View>
        <Text>CentralIcon</Text>
        <Text>Central</Text>
      </View>
    );
  }
  if (type === "FeedBack") {
    return (
      <View>
        <Text>FeedBackIcon</Text>
        <Text>FeedBack</Text>
      </View>
    );
  }
  if (type === "About") {
    return (
      <View>
        <Text>AboutIcon</Text>
        <Text>About</Text>
      </View>
    );
  }

  return null;
}
