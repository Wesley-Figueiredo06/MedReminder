import Login from "./login";
import Home from "./home";
import { router, Stack } from "expo-router";
import NewMedication from "./addMedication";
import SettingsScreen from "./settings";

export default function Index() {
  return <SettingsScreen />;
}
