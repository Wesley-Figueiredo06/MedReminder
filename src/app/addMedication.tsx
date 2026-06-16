import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useEffect, useState } from "react";

import DropDownPicker, {
  DropDownPickerProps,
} from "react-native-dropdown-picker";

import { ArrowLeft, Rows } from "lucide-react-native";
import { style } from "../assets/styles/style";

import { router } from "expo-router";

export default function NewMedication() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("1x");
  const [time, setTime] = useState("");

  const [items, setItems] = useState([
    { label: "1x ao dia", value: "1x" },
    { label: "2x ao dia", value: "2x" },
    { label: "3x ao dia", value: "3x" },
    { label: "4x ao dia", value: "4x" },
    { label: "A cada 4 horas", value: "4h" },
    { label: "A cada 8 horas", value: "8h" },
    { label: "A cada 12 horas", value: "12h" },
  ]);

  function handleClick() {
    router.push("/home");
  }
  function handleTimeChange(value: string) {
    let numbers = value.replace(/\D/g, "");

    numbers = numbers.slice(0, 4);

    let hours = numbers.slice(0, 2);
    let minutes = numbers.slice(2, 4);

    if (hours.length === 2 && Number(hours) > 23) {
      hours = "23";
    }
    if (minutes.length === 2 && Number(minutes) > 59) {
      minutes = "59";
    }

    let formatted = hours;

    if (numbers.length > 2) {
      formatted += ":" + minutes;
    }
    setTime(formatted);
  }

  return (
    <View style={style.formConteiner}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={handleClick}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text>Novo Medicamento</Text>
      </View>

      <View style={{}}>
        <Text>Nome do Medicamento</Text>
        <TextInput placeholder="Ex:Paracetamol" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text>Frequência</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Selecione a frequência"
            style={style.dropDownPickerStyle}
          />
        </View>
        <View>
          <Text>Horário Inicial</Text>
          <TextInput
            value={time}
            onChangeText={handleTimeChange}
            keyboardType="numeric"
            placeholder="08:00"
            maxLength={5}
          />
        </View>
      </View>
      <View style={{}}>
        <Text>Nome do Medicamento</Text>
        <TextInput placeholder="Ex:Paracetamol" />
      </View>
      <View style={{}}>
        <Text>Nome do Medicamento</Text>
        <TextInput placeholder="Ex:Paracetamol" />
      </View>
      <View style={{}}>
        <Text>Nome do Medicamento</Text>
        <TextInput placeholder="Ex:Paracetamol" />
      </View>

      <View style={{}}>
        <Text>DisclamierIcon</Text>
        <Text>
          Certifique-se de seguir as orientações médicas. Este aplicativo é
          apenas uma ferramenta de auxílio.
        </Text>
      </View>

      <View style={{ width: "100%" }}>
        <TouchableOpacity>
          <Text>Salvar Medicamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
