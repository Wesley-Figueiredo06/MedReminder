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
  return (
    <View style={style.conteiner}>
      <View>
        {/* header */}
        <View>
          <Text>Olá, Usuário!</Text>
          <Text>Dia da semana e em data</Text>
        </View>
        <Text>exitIcon</Text>
      </View>
      <View>
        <TextInput placeholder="asdada" />
      </View>
      <View>
        <TextInput placeholder="asdada" />
      </View>
      <View>
        <TextInput placeholder="asdada" />
      </View>
    </View>
  );
}
