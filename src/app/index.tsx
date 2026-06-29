import { useEffect } from "react";
import { router } from "expo-router";
import { mockAuth } from "../mocks/auth";

export default function Index() {
  useEffect(() => {
    // Mock: autenticação real via Supabase ainda não conectada.
    router.replace(mockAuth.hasSession ? "/home" : "/login");
  }, []);

  return null;
}
