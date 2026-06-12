import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useEffect, useState } from "react";
import { style } from "../assets/styles/styleHome";

export default function Home() {
  const date = new Date();
  return (
    <View style={style.conteiner}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* header */}
        <View>
          <Text>Olá, Usuário!</Text>
          <Text>{date.toDateString()}</Text>
        </View>
        <Text>exitIconsdasd</Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            width: "auto",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              width: 150,
              height: 150,
              alignItems: "flex-start",
              justifyContent: "space-around",
              backgroundColor: "#EFF6FF",
              borderColor: "#DBEAFE",
              borderWidth: 1,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Text>Icon</Text>
            <Text>Reminder Count</Text>
            <Text>Reminder Tag</Text>
          </View>
          <View
            style={{
              width: 150,
              height: 150,
              alignItems: "flex-start",
              justifyContent: "space-around",
              backgroundColor: "#ECFDF5",
              borderColor: "#D0FAE5",
              borderWidth: 1,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Text>Icon</Text>
            <Text>MedTaken Count</Text>
            <Text>MedTaken Tag</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Próximas Doses</Text>
        <Text>Total: {`${"Count Value"}`}</Text>
      </View>

      <View
        style={{
          width: 320,
          height: 200,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "space-around",
          backgroundColor: "#F9FAFB",
          borderColor: "#E5E7EB",
          borderStyle: "dotted",
          borderWidth: 1.5,
          borderRadius: 10,
          padding: 20,
        }}
      >
        <Text>DeliveriIcon</Text>
        <Text>Nenhum medicamento cadastrado ainda.</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "auto",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>ScheduleIcon</Text>
          <Text>Hoje</Text>
        </View>
        <View>
          <Text>SettingsIcon</Text>
          <Text>Hoje</Text>
        </View>
      </View>
    </View>
  );
}
