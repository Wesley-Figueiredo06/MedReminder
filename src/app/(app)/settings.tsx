import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";

import { router } from "expo-router";
import { useState } from "react";

import { color, styleSettings } from "../../styles/styleSettings";
import { colors as Colors } from "../../constants/colors";
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
  function handleHomeClick() {
    router.replace(ROUTES.home);
  }
  function handleLogout() {
    setActiveModal(null);
    router.replace(ROUTES.login);
  }
  const [enableNotify, setEnabledNotify] = useState(false);
  const [enableDarkMode, setEnabledDarkMode] = useState(false);
  const [activeModal, setActiveModal] = useState<SettingsModalType | null>(null);

  return (
    <View style={styleSettings.container}>
      {/* header */}
      <View style={styleSettings.header}>
        <View>
          <Text style={styleSettings.titleContent}>Ajustes</Text>
        </View>
      </View>

      {/* User */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[]}
      >
        <View style={styleSettings.scrollViewContainer}>
          <View style={styleSettings.containerUser}>
            <TouchableOpacity>
              <View style={styleSettings.cardUser}>
                <View style={styleSettings.iconContainerUser}>
                  <User size={40} color={color.primaryColor} />
                </View>
                <View style={styleSettings.labelAlign}>
                  <Text style={styleSettings.label}>Usuário</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* General */}

          <Text style={styleSettings.textLabelContent}>GERAL</Text>
          <View style={styleSettings.containerCard}>
            <View style={styleSettings.cards}>
              <View style={styleSettings.iconContainer}>
                <Bell size={20} color={color.primaryIconColor} />
              </View>

              <View style={styleSettings.labelAlign}>
                <Text style={styleSettings.label}>Notificações</Text>
                <Text style={styleSettings.textTitle}>
                  Lembretes de doses e recargas
                </Text>
              </View>
              <Switch
                value={enableNotify}
                onValueChange={setEnabledNotify}
                trackColor={{ false: Colors.border, true: color.primaryColor }}
                thumbColor={Colors.white}
              />
            </View>
            <View style={[styleSettings.cards, styleSettings.cardsMiddle]}>
              <View style={styleSettings.iconContainer}>
                <Moon size={20} color={color.primaryIconColor} />
              </View>

              <View style={styleSettings.labelAlign}>
                <Text style={styleSettings.label}>Modo Noturno</Text>
              </View>

              <Switch
                value={enableDarkMode}
                onValueChange={setEnabledDarkMode}
                trackColor={{ false: Colors.border, true: color.primaryColor }}
                thumbColor={Colors.white}
              />
            </View>

            <TouchableOpacity
              onPress={() => setActiveModal("privacy")}
              style={styleSettings.cards}
            >
              <View style={styleSettings.iconContainer}>
                <Shield size={20} color={color.primaryIconColor} />
              </View>

              <View style={styleSettings.labelAlign}>
                <Text style={styleSettings.label}>Privacidade</Text>
              </View>

              <ChevronRight size={20} color={color.primaryIconColor} />
            </TouchableOpacity>
          </View>

          {/* Help*/}
          <Text style={styleSettings.textLabelContent}>AJUDA</Text>

          <View style={styleSettings.containerCard}>
            <TouchableOpacity
              onPress={() => setActiveModal("help")}
              style={styleSettings.cards}
            >
              <View style={styleSettings.iconContainer}>
                <CircleQuestionMark size={20} color={color.primaryIconColor} />
              </View>

              <View style={styleSettings.labelAlign}>
                <Text style={styleSettings.label}>Central de ajuda</Text>
              </View>

              <ChevronRight size={20} color={color.primaryIconColor} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setActiveModal("feedback")}>
              <View style={[styleSettings.cards, styleSettings.cardsMiddle]}>
                <View style={styleSettings.iconContainer}>
                  <MessageSquare size={20} color={color.primaryIconColor} />
                </View>
                <View style={styleSettings.labelAlign}>
                  <Text style={styleSettings.label}>FeedBack</Text>
                </View>
                <ChevronRight size={20} color={color.primaryIconColor} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveModal("about")}
              style={styleSettings.cards}
            >
              <View style={styleSettings.iconContainer}>
                <Pill size={20} color={color.primaryIconColor} />
              </View>
              <View style={styleSettings.labelAlign}>
                <Text style={styleSettings.label}>Sobre o MedRemind</Text>
                <Text style={styleSettings.textTitle}>v1.0.0</Text>
              </View>
              <ChevronRight size={20} color={color.primaryIconColor} />
            </TouchableOpacity>
          </View>

          {/* Account*/}
          <Text style={styleSettings.textLabelContent}>CONTA</Text>

          <View style={styleSettings.containerCard}>
            <TouchableOpacity
              onPress={() => setActiveModal("logout")}
              style={styleSettings.cards}
            >
              <View style={styleSettings.iconContainerDanger}>
                <LogOut size={20} color={color.dangerColor} />
              </View>

              <View style={styleSettings.labelAlign}>
                <Text style={styleSettings.logoutText}>Sair da Conta</Text>
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

      <View style={styleSettings.footer}>
        <TouchableOpacity onPress={handleHomeClick}>
          <View style={styleSettings.footerItem}>
            <Calendar color={color.primaryIconColor} />
            <Text style={{ color: color.primaryIconColor }}>Hoje</Text>
          </View>
        </TouchableOpacity>

        <View>
          <View style={styleSettings.footerItem}>
            <Settings color={color.secondaryIconColor} />
            <Text style={{ color: color.secondaryIconColor }}>Ajustes</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
