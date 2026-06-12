import Login from "./login";
import Home from "./home";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  );
}
