import { useState } from "react";
import { Pressable, Text, View, ScrollView, StyleSheet } from "react-native";
import { useThemedStyles } from "../hooks/useThemedStyles";
import type { ThemeColors } from "../constants/colors";

const BUTTON_HEIGHT = 50;
const LIST_TOP_OFFSET = 54;
const LIST_MAX_HEIGHT = 200;
const OVERLAY_SPREAD = -1000;

export type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  value: string;
  setValue: (value: string) => void;
  items: DropdownItem[];
  placeholder?: string;
};

const createStyle = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      position: "relative",
      width: "100%",
    },
    button: {
      height: BUTTON_HEIGHT,
      paddingHorizontal: 10,
      borderRadius: 15,
      backgroundColor: colors.inputBackground,
      borderColor: colors.placeholder,
      borderWidth: 0.5,
      justifyContent: "center",
    },
    placeholderText: {
      color: colors.placeholder,
    },
    selectedText: {
      color: colors.textPrimary,
    },
    overlay: {
      position: "absolute",
      top: OVERLAY_SPREAD,
      left: OVERLAY_SPREAD,
      right: OVERLAY_SPREAD,
      bottom: OVERLAY_SPREAD,
      zIndex: 15,
    },
    list: {
      position: "absolute",
      top: LIST_TOP_OFFSET,
      left: 0,
      right: 0,
      zIndex: 20,
      elevation: 6,
      maxHeight: LIST_MAX_HEIGHT,
      borderRadius: 15,
      backgroundColor: colors.inputBackground,
      borderColor: colors.placeholder,
      borderWidth: 0.5,
    },
    item: {
      padding: 10,
    },
    itemPressed: {
      backgroundColor: colors.iconBackground,
    },
  });

export default function Dropdown({
  value,
  setValue,
  items,
  placeholder = "Selecione a frequência",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const style = useThemedStyles(createStyle);

  const selectedLabel = items.find((item) => item.value === value)?.label;

  return (
    <View style={style.container}>
      {open && (
        <Pressable style={style.overlay} onPress={() => setOpen(false)} />
      )}

      <Pressable style={style.button} onPress={() => setOpen(!open)}>
        <Text style={selectedLabel ? style.selectedText : style.placeholderText}>
          {selectedLabel ?? placeholder}
        </Text>
      </Pressable>

      {open && (
        <ScrollView
          style={style.list}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
        >
          {items.map((item) => (
            <Pressable
              key={item.value}
              style={({ pressed }) => [style.item, pressed && style.itemPressed]}
              onPress={() => {
                setValue(item.value);
                setOpen(false);
              }}
            >
              <Text style={style.selectedText}>{item.label}</Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
