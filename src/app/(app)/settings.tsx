import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";

import { router } from "expo-router";
import { useEffect, useState, useMemo } from "react";

import { color, styleStettings } from "../../styles/styleSettings";
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
import ModalCustom from "../../components/Modal";
import SettingsModal from "../../components/SettingsModal";

export default function SettingsScreen() {
  function logoutClick() {
    router.push(ROUTES.login);
  }
  function handleHomeClick() {
    router.replace(ROUTES.home);
  }
  const [enableNotify, setEnabledNotify] = useState(false);
  const [enableDarkMode, setEnabledDarkMode] = useState(false);
  const [modalType, setModalType] = useState<
    "Privacy" | "HelpCenter" | "FeedBack" | "About" | null
  >(null);

  const [logoutModal, setLogoutModal] = useState(false);

  const [titleText, settitleText] = useState<
    "Privacidade" | "Cental de Ajuda" | "Seu Feedback" | "Sobre o App" | null
  >(null);

  return (
    <View style={styleStettings.conteiner}>
      {/* header */}
      <View style={styleStettings.header}>
        <View>
          <Text style={styleStettings.titleContent}>Ajustes</Text>
        </View>
      </View>

      {/* User */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[]}
      >
        <View style={styleStettings.scrollViewConteinar}>
          <View style={styleStettings.conteinerUser}>
            <TouchableOpacity>
              <View style={styleStettings.cardUser}>
                <View style={styleStettings.iconContainerUser}>
                  <User size={40} color={color.primaryColor} />
                </View>
                <View style={styleStettings.labelAlign}>
                  <Text style={styleStettings.label}>Usuário</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* General */}

          <Text style={styleStettings.textLabelContent}>GERAL</Text>
          <View style={styleStettings.conteinerCard}>
            <View style={styleStettings.cards}>
              <View style={styleStettings.iconContainer}>
                <Bell size={20} color={color.primaryIconColor} />
              </View>

              <View style={styleStettings.labelAlign}>
                <Text style={styleStettings.label}>Notificações</Text>
                <Text style={styleStettings.textTitle}>
                  Lembretes de doses e recargas
                </Text>
              </View>
              <Switch
                value={enableNotify}
                onValueChange={setEnabledNotify}
                trackColor={{ false: "#E5E7EB", true: "#155DFC" }}
                thumbColor="#FFFFFF"
              />
            </View>
            <View style={[styleStettings.cards, styleStettings.cardsMiddle]}>
              <View style={styleStettings.iconContainer}>
                <Moon size={20} color={color.primaryIconColor} />
              </View>

              <View style={styleStettings.labelAlign}>
                <Text style={styleStettings.label}>Modo Noturno</Text>
              </View>

              <Switch
                value={enableDarkMode}
                onValueChange={setEnabledDarkMode}
                trackColor={{ false: "#E5E7EB", true: "#155DFC" }}
                thumbColor="#FFFFFF"
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                setModalType("Privacy");
                settitleText("Privacidade");
              }}
              style={styleStettings.cards}
            >
              <View style={styleStettings.iconContainer}>
                <Shield size={20} color={color.primaryIconColor} />
              </View>

              <View style={styleStettings.labelAlign}>
                <Text style={styleStettings.label}>Privacidade</Text>
              </View>

              <ChevronRight size={20} color={color.primaryIconColor} />
            </TouchableOpacity>
          </View>

          {/* Help*/}
          <Text style={styleStettings.textLabelContent}>AJUDA</Text>

          <View style={styleStettings.conteinerCard}>
            <TouchableOpacity
              onPress={() => {
                setModalType("HelpCenter");
                settitleText("Cental de Ajuda");
              }}
              style={styleStettings.cards}
            >
              <View style={styleStettings.iconContainer}>
                <CircleQuestionMark size={20} color={color.primaryIconColor} />
              </View>

              <View style={styleStettings.labelAlign}>
                <Text style={styleStettings.label}>Central de ajuda</Text>
              </View>

              <ChevronRight size={20} color={color.primaryIconColor} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalType("FeedBack");
                settitleText("Seu Feedback");
              }}
            >
              <View style={[styleStettings.cards, styleStettings.cardsMiddle]}>
                <View style={styleStettings.iconContainer}>
                  <MessageSquare size={20} color={color.primaryIconColor} />
                </View>
                <View style={styleStettings.labelAlign}>
                  <Text style={styleStettings.label}>FeedBack</Text>
                </View>
                <ChevronRight size={20} color={color.primaryIconColor} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalType("About");
                settitleText("Sobre o App");
              }}
              style={styleStettings.cards}
            >
              <View style={styleStettings.iconContainer}>
                <Pill size={20} color={color.primaryIconColor} />
              </View>
              <View style={styleStettings.labelAlign}>
                <Text style={styleStettings.label}>Sobre o MedRemind</Text>
                <Text style={styleStettings.textTitle}>v1.0.0</Text>
              </View>
              <ChevronRight size={20} color={color.primaryIconColor} />
            </TouchableOpacity>
          </View>

          {/* Account*/}
          <Text style={styleStettings.textLabelContent}>CONTA</Text>

          <View style={styleStettings.conteinerCard}>
            <TouchableOpacity
              onPress={() => {
                setLogoutModal(true);
              }}
              style={styleStettings.cards}
            >
              <View style={styleStettings.iconContainerExg}>
                <LogOut size={20} color="#FB3039" />
              </View>

              <View style={styleStettings.labelAlign}>
                <Text style={{ color: "#FB3039", fontWeight: "600" }}>
                  Sair da Conta
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <ModalCustom
        titleText={titleText}
        visible={modalType !== null}
        onClose={() => setModalType(null)}
      >
        <SettingsModal type={modalType} />
      </ModalCustom>

      <ModalCustom
        titleText={titleText}
        visible={logoutModal}
        onClose={() => setLogoutModal(false)}
        buttonColor="#FB3039"
        buttonText="Sair"
      >
        <Text>Tem certeza que deseja sair?</Text>
      </ModalCustom>
      {/* footer */}

      <View style={styleStettings.footer}>
        <TouchableOpacity onPress={handleHomeClick}>
          <View style={{ alignItems: "center" }}>
            <Calendar color={color.primaryIconColor} />
            <Text style={{ color: color.primaryIconColor }}>Hoje</Text>
          </View>
        </TouchableOpacity>

        <View>
          <View style={{ alignItems: "center" }}>
            <Settings color={color.secondaryIconColor} />
            <Text style={{ color: color.secondaryIconColor }}>Ajustes</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
