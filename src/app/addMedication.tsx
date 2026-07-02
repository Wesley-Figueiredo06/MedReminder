import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import {
  ArrowLeft,
  CircleAlert,
  Clock,
  Pill,
  Calendar,
} from "lucide-react-native";

import { style } from "../styles/style";
import Dropdown from "../components/Dropdown";
import TextField from "../components/TextField";

export default function NewMedication() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

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
    router.replace("/home");
  }
  function handleRedirect() {
    router.replace("/home");
  }

  function handleDateChange(value: string) {
    let numbers = value.replace(/\D/g, "");

    numbers = numbers.slice(0, 10);

    let days = numbers.slice(0, 2);
    let month = numbers.slice(2, 4);
    let year = numbers.slice(4, 10);

    if (days.length === 2 && Number(days) > 31) {
      days = "31";
    }
    if (month.length === 2 && Number(month) > 12) {
      month = "12";
    }

    let formatted = days;

    if (numbers.length > 2) {
      formatted += "/" + month + "/" + year;
    }
    setDate(formatted);
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
          gap: 15,
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
          style={{ padding: 8, backgroundColor: "#F9FAFB", borderRadius: 100 }}
          onPress={handleClick}
        >
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={[style.label, { fontSize: 20 }]}>Novo Medicamento</Text>
      </View>

      <TextField
        label="Nome do Medicamento"
        placeholder="Ex: Paracetamol"
        icon={<Pill size={20} color="#99A1AF" />}
      />

      <TextField label="Dosagem" placeholder="Ex: 500mg" />

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          zIndex: 10,
        }}
      >
        <View style={{ flex: 1, zIndex: 10 }}>
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Clock style={{ top: 2 }} size={15} />
            <Text
              style={{
                width: "auto",
                marginBottom: 5,
                fontWeight: "500",
              }}
            >
              Frequência
            </Text>
          </View>

          <Dropdown
            value={value}
            setValue={setValue}
            items={items}
            placeholder="Selecione a frequência"
          />
        </View>

        <View style={{ flex: 1 }}>
          <TextField
            label="Horário Inicial"
            value={time}
            onChangeText={handleTimeChange}
            placeholder="08:00"
            keyboardType="numeric"
            maxLength={5}
          />
        </View>
      </View>

      <TextField
        label="Data de Início"
        value={date}
        onChangeText={handleDateChange}
        placeholder="dd/mm/yyyy"
        maxLength={10}
        icon={<Calendar size={20} color="#99A1AF" />}
      />

      <TextField
        label="Observações (Opcional)"
        placeholder="Ex: Tomar após as refeições"
        multiline
      />

      <View
        style={{
          width: "100%",
          marginTop: 10,
          padding: 20,
          height: 80,
          backgroundColor: "#EFF6FF",
          borderColor: "#DBEAFE",
          borderRadius: 15,
          borderWidth: 1,
          marginBottom: 70,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            bottom: 10,
            alignSelf: "flex-start",
            paddingLeft: 10,
            paddingTop: 20,
          }}
        >
          <CircleAlert size={20} color="#193CB8" />
        </View>

        <Text style={{ color: "#193CB8", fontSize: 13 }}>
          Certifique-se de seguir as orientações médicas. Este aplicativo é
          apenas uma ferramenta de auxílio.
        </Text>
      </View>

      <View style={{ width: "100%", marginBottom: 10 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 50,
            backgroundColor: "#155DFC",
            borderRadius: 10,
          }}
          onPress={handleRedirect}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 20,
            }}
          >
            Salvar Medicamento
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
