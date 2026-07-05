import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";

import { router } from "expo-router";
import { useState } from "react";

import { createSettingsStyles } from "../../styles/styleSettings";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { useTheme } from "../../contexts/ThemeContext";
import { ROUTES } from "../../constants";

import {
  Moon,
  Calendar,
  Settings,
  Pill,
  Bell,
  LogOut,
  Shield,
  CircleQuestionMark,
  MessageSquare,
  ChevronRight,
  User,
} from "lucide-react-native";
import PrivacyModal from "../../components/settings/PrivacyModal";
import HelpCenterModal from "../../components/settings/HelpCenterModal";
import FeedbackModal from "../../components/settings/FeedbackModal";
import AboutModal from "../../components/settings/AboutModal";
import LogoutModal from "../../components/settings/LogoutModal";

type SettingsModalType = "privacy" | "help" | "feedback" | "about" | "logout";

export default function SettingsScreen() {
  const style = useThemedStyles(createSettingsStyles);
  const { colors, isDark, toggleTheme } = useTheme();

  function handleHomeClick() {
    router.replace(ROUTES.home);
  }
  function handleLogout() {
    setActiveModal(null);
    router.replace(ROUTES.login);
  }
  const [enableNotify, setEnabledNotify] = useState(false);
  const [activeModal, setActiveModal] = useState<SettingsModalType | null>(null);

  return (
    <View style={style.container}>
      {/* header */}
      <View style={style.header}>
        <View>
          <Text style={style.titleContent}>Ajustes</Text>
        </View>
      </View>

      {/* User */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[]}
      >
        <View style={style.scrollViewContainer}>
          <View style={style.containerUser}>
            <TouchableOpacity>
              <View style={style.cardUser}>
                <View style={style.iconContainerUser}>
                  <User size={40} color={colors.primary} />
                </View>
                <View style={style.labelAlign}>
                  <Text style={style.label}>Usuário</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* General */}

          <Text style={style.textLabelContent}>GERAL</Text>
          <View style={style.containerCard}>
            <View style={style.cards}>
              <View style={style.iconContainer}>
                <Bell size={20} color={colors.iconMuted} />
              </View>

              <View style={style.labelAlign}>
                <Text style={style.label}>Notificações</Text>
                <Text style={style.textTitle}>
                  Lembretes de doses e recargas
                </Text>
              </View>
              <Switch
                value={enableNotify}
                onValueChange={setEnabledNotify}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.white}
              />
            </View>
            <View style={[style.cards, style.cardsMiddle]}>
              <View style={style.iconContainer}>
                <Moon size={20} color={colors.iconMuted} />
              </View>

              <View style={style.labelAlign}>
                <Text style={style.label}>Modo Noturno</Text>
              </View>

              <Switch
                value={isDark}
                onValueChange={toggleTheme}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.white}
              />
            </View>

            <TouchableOpacity
              onPress={() => setActiveModal("privacy")}
              style={style.cards}
            >
              <View style={style.iconContainer}>
                <Shield size={20} color={colors.iconMuted} />
              </View>

              <View style={style.labelAlign}>
                <Text style={style.label}>Privacidade</Text>
              </View>

              <ChevronRight size={20} color={colors.iconMuted} />
            </TouchableOpacity>
          </View>

          {/* Help*/}
          <Text style={style.textLabelContent}>AJUDA</Text>

          <View style={style.containerCard}>
            <TouchableOpacity
              onPress={() => setActiveModal("help")}
              style={style.cards}
            >
              <View style={style.iconContainer}>
                <CircleQuestionMark size={20} color={colors.iconMuted} />
              </View>

              <View style={style.labelAlign}>
                <Text style={style.label}>Central de ajuda</Text>
              </View>

              <ChevronRight size={20} color={colors.iconMuted} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setActiveModal("feedback")}>
              <View style={[style.cards, style.cardsMiddle]}>
                <View style={style.iconContainer}>
                  <MessageSquare size={20} color={colors.iconMuted} />
                </View>
                <View style={style.labelAlign}>
                  <Text style={style.label}>FeedBack</Text>
                </View>
                <ChevronRight size={20} color={colors.iconMuted} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveModal("about")}
              style={style.cards}
            >
              <View style={style.iconContainer}>
                <Pill size={20} color={colors.iconMuted} />
              </View>
              <View style={style.labelAlign}>
                <Text style={style.label}>Sobre o MedRemind</Text>
                <Text style={style.textTitle}>v1.0.0</Text>
              </View>
              <ChevronRight size={20} color={colors.iconMuted} />
            </TouchableOpacity>
          </View>

          {/* Account*/}
          <Text style={style.textLabelContent}>CONTA</Text>

          <View style={style.containerCard}>
            <TouchableOpacity
              onPress={() => setActiveModal("logout")}
              style={style.cards}
            >
              <View style={style.iconContainerDanger}>
                <LogOut size={20} color={colors.danger} />
              </View>

              <View style={style.labelAlign}>
                <Text style={style.logoutText}>Sair da Conta</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <PrivacyModal
        visible={activeModal === "privacy"}
        onClose={() => setActiveModal(null)}
      />
      <HelpCenterModal
        visible={activeModal === "help"}
        onClose={() => setActiveModal(null)}
      />
      <FeedbackModal
        visible={activeModal === "feedback"}
        onClose={() => setActiveModal(null)}
      />
      <AboutModal
        visible={activeModal === "about"}
        onClose={() => setActiveModal(null)}
      />
      <LogoutModal
        visible={activeModal === "logout"}
        onClose={() => setActiveModal(null)}
        onConfirm={handleLogout}
      />
      {/* footer */}

      <View style={style.footer}>
        <TouchableOpacity onPress={handleHomeClick}>
          <View style={style.footerItem}>
            <Calendar color={colors.iconMuted} />
            <Text style={{ color: colors.iconMuted }}>Hoje</Text>
          </View>
        </TouchableOpacity>

        <View>
          <View style={style.footerItem}>
            <Settings color={colors.primaryAccent} />
            <Text style={{ color: colors.primaryAccent }}>Ajustes</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
