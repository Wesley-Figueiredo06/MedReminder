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

import { createAuthStyles } from "../../styles/style";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { useTheme } from "../../contexts/ThemeContext";
import Dropdown from "../../components/Dropdown";
import TextField from "../../components/TextField";
import { ROUTES } from "../../constants";

export default function NewMedication() {
  const style = useThemedStyles(createAuthStyles);
  const { colors } = useTheme();

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

  function handleGoHome() {
    router.replace(ROUTES.home);
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
      <View style={style.headerRow}>
        <TouchableOpacity style={style.backButton} onPress={handleGoHome}>
          <ArrowLeft color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={style.sectionTitle}>Novo Medicamento</Text>
      </View>

      <TextField
        label="Nome do Medicamento"
        placeholder="Ex: Paracetamol"
        icon={<Pill size={20} color={colors.placeholder} />}
      />

      <TextField label="Dosagem" placeholder="Ex: 500mg" />

      <View style={style.fieldRow}>
        <View style={style.fieldRowItem}>
          <View style={style.frequencyLabelRow}>
            <Clock style={style.frequencyIcon} size={15} color={colors.textPrimary} />
            <Text style={style.frequencyLabelText}>Frequência</Text>
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
        icon={<Calendar size={20} color={colors.placeholder} />}
      />

      <TextField
        label="Observações (Opcional)"
        placeholder="Ex: Tomar após as refeições"
        multiline
      />

      <View style={style.infoBox}>
        <View style={style.infoIconWrapper}>
          <CircleAlert size={20} color={colors.infoText} />
        </View>

        <Text style={style.infoText}>
          Certifique-se de seguir as orientações médicas. Este aplicativo é
          apenas uma ferramenta de auxílio.
        </Text>
      </View>

      <View style={style.saveButtonWrapper}>
        <TouchableOpacity style={style.saveButton} onPress={handleGoHome}>
          <Text style={style.saveButtonText}>Salvar Medicamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
