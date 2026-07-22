import { View, StyleSheet } from "react-native";
import { useThemedStyles } from "../hooks/useThemedStyles";
import TextField from "./TextField";
import { formatTimeInput } from "../utils/formatTimeInput";
import type { ThemeColors } from "../constants/colors";

interface MedicationEditFormProps {
  name: string;
  dosage: string;
  time: string;
  instructions: string;
  onChangeName: (value: string) => void;
  onChangeDosage: (value: string) => void;
  onChangeTime: (value: string) => void;
  onChangeInstructions: (value: string) => void;
}

const createStyles = (_colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      gap: 16,
    },
    row: {
      flexDirection: "row",
      gap: 12,
    },
    rowItem: {
      flex: 1,
    },
  });

export default function MedicationEditForm({
  name,
  dosage,
  time,
  instructions,
  onChangeName,
  onChangeDosage,
  onChangeTime,
  onChangeInstructions,
}: MedicationEditFormProps) {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      <TextField label="Nome" placeholder="Ex: Paracetamol" value={name} onChangeText={onChangeName} />

      <View style={styles.row}>
        <View style={styles.rowItem}>
          <TextField label="Dosagem" placeholder="Ex: 500mg" value={dosage} onChangeText={onChangeDosage} />
        </View>
        <View style={styles.rowItem}>
          <TextField
            label="Horário"
            placeholder="08:00"
            value={time}
            onChangeText={(text) => onChangeTime(formatTimeInput(text))}
            keyboardType="numeric"
            maxLength={5}
          />
        </View>
      </View>

      <TextField
        label="Instruções/Observações"
        placeholder="Ex: Tomar após as refeições"
        value={instructions}
        onChangeText={onChangeInstructions}
        multiline
      />
    </View>
  );
}
