import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";

import { router } from "expo-router";
import { useEffect, useState, useMemo } from "react";

import { color, styleStettings } from "../assets/styles/styleSettings";

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
import ModalCustom from "../components/Modal";

export default function SettingsScreen() {
  function logoutClick() {
    router.push("/login");
  }
  function HomeCick() {
    router.replace("/home");
  }
  const [enableNotify, setEnabledNotify] = useState(false);
  const [enableDarkMode, setEnabledDarkMode] = useState(false);
  const [visible, setVisible] = useState(false);

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

          <ModalCustom
            titleText="Privacidade"
            visible={visible}
            onClose={() => setVisible(false)}
          >
            <Text>PrivacidadeIcon</Text>
            <Text>
              Seus dados de saúde são criptografados e armazenados de forma
              segura. Não compartilhamos suas informações com terceiros.
            </Text>
          </ModalCustom>
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
              onPress={() => setVisible(true)}
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
            <TouchableOpacity style={styleStettings.cards}>
              <View style={styleStettings.iconContainer}>
                <CircleQuestionMark size={20} color={color.primaryIconColor} />
              </View>

              <View style={styleStettings.labelAlign}>
                <Text style={styleStettings.label}>Central de ajuda</Text>
              </View>

              <ChevronRight size={20} color={color.primaryIconColor} />
            </TouchableOpacity>

            <TouchableOpacity>
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

            <TouchableOpacity style={styleStettings.cards}>
              <View style={styleStettings.iconContainer}>
                <Pill size={20} color={color.primaryIconColor} />
              </View>
              <View style={styleStettings.labelAlign}>
                <Text style={styleStettings.label}>Sobre o MedRedmind</Text>
                <Text style={styleStettings.textTitle}>v1.0.0</Text>
              </View>
              <ChevronRight size={20} color={color.primaryIconColor} />
            </TouchableOpacity>
          </View>

          {/* Account*/}
          <Text style={styleStettings.textLabelContent}>CONTA</Text>

          <View style={styleStettings.conteinerCard}>
            <TouchableOpacity
              onPress={logoutClick}
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

      {/* footer */}

      <View style={styleStettings.footer}>
        <TouchableOpacity onPress={HomeCick}>
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
