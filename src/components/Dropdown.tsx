import { useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

const style = StyleSheet.create({
  dropdownStyle: {
    width: "90%",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#F9FAFB",
    borderColor: "#99A1AF",
    borderWidth: 0.5,
  },
});

type dropdownProps = {
  value: string;
  setValue: (value: string) => void;
  items: string[];
};

export default function DropDown({ value, setValue, items }: dropdownProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Pressable style={style.dropdownStyle} onPress={() => setOpen(!open)}>
        <Text>{value || "Selecione a frequência"}</Text>
      </Pressable>

      {open && (
        <View style={style.dropdownStyle}>
          {items.map((item) => (
            <Pressable
              key={item}
              onPress={() => {
                setValue(item);
                setOpen(false);
              }}
            >
              <Text>{item}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </>
  );
}
