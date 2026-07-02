import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const PLACEHOLDER_COLOR = "#99A1AF";

interface TextFieldProps {
  label: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  icon?: React.ReactNode;
  keyboardType?: "default" | "numeric";
  maxLength?: number;
  multiline?: boolean;
}

const style = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontWeight: "500",
    marginBottom: 5,
    color: "#374151",
  },
  inputBase: {
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "#F9FAFB",
    borderColor: "#99A1AF",
    borderWidth: 0.5,
    color: "#111827",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  inputFlex: {
    flex: 1,
  },
  inputMultiline: {
    height: 120,
    textAlignVertical: "top",
    paddingTop: 10,
  },
});

export default function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  keyboardType = "default",
  maxLength,
  multiline = false,
}: TextFieldProps) {
  const inputProps = {
    value,
    onChangeText,
    placeholder,
    placeholderTextColor: PLACEHOLDER_COLOR,
    keyboardType,
    maxLength,
    multiline,
  };

  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      {icon ? (
        <View style={[style.inputBase, style.inputWithIcon]}>
          {icon}
          <TextInput {...inputProps} style={style.inputFlex} />
        </View>
      ) : (
        <TextInput
          {...inputProps}
          style={[style.inputBase, multiline && style.inputMultiline]}
        />
      )}
    </View>
  );
}
