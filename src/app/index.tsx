import Login from "./login";
import Home from "./home";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import NewMedication from "./addMedication";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Login />
    </SafeAreaView>
  );
}
