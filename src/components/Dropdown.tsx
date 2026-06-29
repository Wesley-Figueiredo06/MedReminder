import { useState } from "react";
import { Pressable, Text, View, ScrollView, StyleSheet } from "react-native";

const style = StyleSheet.create({
  dropdownButton: {
    width: "90%",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#F9FAFB",
    borderColor: "#99A1AF",
    borderWidth: 0.5,
  },
  dropdownList: {
    width: "90%",
    marginTop: 5,
    maxHeight: 160,
    borderRadius: 15,
    backgroundColor: "#F9FAFB",
    borderColor: "#99A1AF",
    borderWidth: 0.5,
  },
  item: {
    padding: 10,
  },
});

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

export default function Dropdown({
  value,
  setValue,
  items,
  placeholder = "Selecione a frequência",
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  const selectedLabel = items.find((item) => item.value === value)?.label;

  return (
    <>
      <Pressable style={style.dropdownButton} onPress={() => setOpen(!open)}>
        <Text>{selectedLabel || placeholder}</Text>
      </Pressable>

      {open && (
        <ScrollView style={style.dropdownList} showsVerticalScrollIndicator={false}>
          {items.map((item) => (
            <Pressable
              key={item.value}
              style={style.item}
              onPress={() => {
                setValue(item.value);
                setOpen(false);
              }}
            >
              <Text>{item.label}</Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </>
  );
}
