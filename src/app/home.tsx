import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Link, router } from "expo-router";

import { useEffect, useState, useMemo } from "react";

import { style } from "../styles/styleHome";
import {
  Plus,
  Calendar,
  Settings,
  ClipboardList,
  Pill,
  Bell,
  LogOut,
} from "lucide-react-native";

export default function Home() {
  const formattedDate = useMemo(() => {
    const date = new Date();

    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }, []);

  function logoutClick() {
    router.replace("/login");
  }
  function addMedication() {
    router.push("/addMedication");
  }
  function settings() {
    router.push("/settings");
  }
  return (
    <View style={style.conteiner}>
      {/* header */}

      <View style={style.header}>
        <View>
          <Text style={style.titleContent}>Olá, Usuário!</Text>
          <Text>{formattedDate}</Text>
        </View>
        <TouchableOpacity onPress={logoutClick} style={style.logoutIcon}>
          <LogOut />
        </TouchableOpacity>
      </View>
      {/* Cards */}

      <View style={style.cards}>
        <View style={style.cardBlue}>
          <View style={style.bellIconConteiner}>
            <Bell size={20} color="#588DFD" />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#1C398E" }}>
            0
          </Text>
          <Text style={{ color: "#155DFC" }}>ATIVOS</Text>
        </View>

        <View style={style.cardGreen}>
          <View style={style.pillIconConteiner}>
            <Pill size={20} color="#0F9981" />
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#004F3B" }}>
            0
          </Text>
          <Text style={{ color: "#0F9981" }}>TOMADOS</Text>
        </View>
      </View>
      {/* Checklist Medication */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[]}
      >
        <View>
          <View style={style.titleRow}>
            <Text style={style.titleContent}>Próximas Doses</Text>
            <Text style={{ color: "#A5A9CA" }}>Total: {`${"0"}`}</Text>
          </View>

          <View style={style.emptyBox}>
            <ClipboardList size={35} />
            <Text>Nenhum medicamento cadastrado ainda.</Text>
          </View>
        </View>
      </ScrollView>
      {/* footer */}

      <View style={style.footer}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Calendar color="#155DFC" />
            <Text style={{ color: "#155DFC" }}>Hoje</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: 43,
              height: 43,
              backgroundColor: "#155DFC",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
            }}
            onPress={addMedication}
          >
            <Plus color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={settings}>
          <View style={{ alignItems: "center" }}>
            <Settings color="#6A7282" />
            <Text style={{ color: "#6A7282" }}>Ajustes</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
