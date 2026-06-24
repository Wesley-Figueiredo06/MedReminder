import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

type props = {
  visible: boolean;
  titleText?: string | null;
  onClose: () => void;
  children: React.ReactNode;

  buttonText?: string;
  buttonColor?: string;
};

export default function ModalCustom({
  visible,
  onClose,
  titleText,
  children,
  buttonText = "Entendi",
  buttonColor = "#155DFC",
}: props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={style.modalbackgroundConteiner}>
        <View style={style.modalConteiner}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{titleText}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text>ExitButtom</Text>
            </TouchableOpacity>
          </View>

          {children}

          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "95%",
              height: 50,
              backgroundColor: buttonColor,
              borderRadius: 10,
            }}
            onPress={onClose}
          >
            <Text style={{ color: "white" }}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export const style = StyleSheet.create({
  modalbackgroundConteiner: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalConteiner: {
    width: 350,
    height: "auto",
    maxHeight: 350,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    gap: 10,
  },
});
