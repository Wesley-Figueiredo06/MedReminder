import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { style } from "../assets/styles/styleModal";

type props = {
  visible: boolean;
  titleText: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalCustom({
  visible,
  onClose,
  titleText,
  children,
}: props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 350,
            height: "auto",
            maxHeight: 350,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 20,
            gap: 10,
          }}
        >
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
              backgroundColor: "#155DFC",
              borderRadius: 10,
            }}
            onPress={onClose}
          >
            <Text style={{ color: "white" }}>Entendi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
