import { useEffect } from "react";
import { router } from "expo-router";
import { mockAuth } from "../mocks/auth";
import { ROUTES } from "../constants";

export default function Index() {
  useEffect(() => {
    // Mock: autenticação real via Supabase ainda não conectada.
    router.replace(mockAuth.hasSession ? ROUTES.home : ROUTES.login);
  }, []);

  return null;
}
