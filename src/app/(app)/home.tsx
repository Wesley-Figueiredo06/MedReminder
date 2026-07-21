import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Link, router } from "expo-router";

import { useEffect, useState, useMemo } from "react";

import { createHomeStyles } from "../../styles/styleHome";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { useTheme } from "../../contexts/ThemeContext";
import { useUpcomingDoses } from "../../hooks/useUpcomingDoses";
import { ROUTES } from "../../constants";
import MedicationDoseCard from "../../components/MedicationDoseCard";
import MedicationDetailsModal from "../../components/MedicationDetailsModal";
import type { UpcomingDose } from "../../types";
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
  const style = useThemedStyles(createHomeStyles);
  const { colors } = useTheme();
  const { doses } = useUpcomingDoses();
  const [selectedDose, setSelectedDose] = useState<UpcomingDose | null>(null);

  function openDoseDetails(dose: UpcomingDose) {
    setSelectedDose(dose);
  }

  const formattedDate = useMemo(() => {
    const date = new Date();

    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }, []);

  function logoutClick() {
    router.replace(ROUTES.login);
  }
  function addMedication() {
    router.push(ROUTES.addMedication);
  }
  function settings() {
    router.push(ROUTES.settings);
  }
  return (
    <View style={style.conteiner}>
      {/* header */}

      <View style={style.header}>
        <View>
          <Text style={style.titleContent}>Olá, Usuário!</Text>
          <Text style={style.dateText}>{formattedDate}</Text>
        </View>
        <TouchableOpacity onPress={logoutClick} style={style.logoutIcon}>
          <LogOut color={colors.textPrimary} />
        </TouchableOpacity>
      </View>
      {/* Cards */}

      <View style={style.cards}>
        <View style={style.cardBlue}>
          <View style={style.bellIconConteiner}>
            <Bell size={20} color={style.cardBlueIcon.color} />
          </View>
          <Text style={style.cardBlueNumber}>0</Text>
          <Text style={style.cardBlueLabel}>ATIVOS</Text>
        </View>

        <View style={style.cardGreen}>
          <View style={style.pillIconConteiner}>
            <Pill size={20} color={style.cardGreenIcon.color} />
          </View>

          <Text style={style.cardGreenNumber}>0</Text>
          <Text style={style.cardGreenLabel}>TOMADOS</Text>
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
            <Text style={style.totalText}>Total: {doses.length}</Text>
          </View>

          {doses.length === 0 ? (
            <View style={style.emptyBox}>
              <ClipboardList size={35} color={colors.textPrimary} />
              <Text style={style.emptyBoxText}>
                Nenhum medicamento cadastrado ainda.
              </Text>
            </View>
          ) : doses.length < 3 ? (
            <View style={style.doseList}>
              {doses.map((dose) => (
                <MedicationDoseCard
                  key={dose.id}
                  dose={dose}
                  onPress={() => openDoseDetails(dose)}
                />
              ))}
            </View>
          ) : (
            <ScrollView
              style={style.doseListScroll}
              contentContainerStyle={style.doseList}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled
            >
              {doses.map((dose) => (
                <MedicationDoseCard
                  key={dose.id}
                  dose={dose}
                  onPress={() => openDoseDetails(dose)}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </ScrollView>
      {/* footer */}

      <View style={style.footer}>
        <View>
          <View style={style.footerItemActive}>
            <Calendar color={colors.primaryAccent} />
            <Text style={style.footerLabelActive}>Hoje</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity style={style.addButton} onPress={addMedication}>
            <Plus color={colors.white} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={settings}>
          <View style={style.footerItem}>
            <Settings color={colors.iconMuted} />
            <Text style={style.footerLabelMuted}>Ajustes</Text>
          </View>
        </TouchableOpacity>
      </View>

      <MedicationDetailsModal
        visible={!!selectedDose}
        dose={selectedDose}
        onClose={() => setSelectedDose(null)}
      />
    </View>
  );
}
