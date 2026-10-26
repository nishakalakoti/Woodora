import { router } from "expo-router";
import {
    ArrowLeft,
    Bell,
    ChevronRight,
    Globe,
    LockKeyhole,
    Moon,
    ShieldCheck,
    Smartphone,
    UserRound,
    Volume2,
} from "lucide-react-native";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsPage() {
  const [orderNotifications, setOrderNotifications] = useState(true);
  const [offersNotifications, setOffersNotifications] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const showComingSoon = (title: string) => {
    Alert.alert(title, "This feature will be connected later.");
  };

  const renderToggle = (
    title: string,
    subtitle: string,
    value: boolean,
    onChange: (value: boolean) => void,
  ) => (
    <View className="flex-row items-center justify-between border-b border-[#F0EDE7] py-4">
      <View className="mr-3 flex-1">
        <Text className="text-sm font-semibold text-[#303530]">{title}</Text>
        <Text className="mt-1 text-xs leading-5 text-[#888888]">
          {subtitle}
        </Text>
      </View>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#D9D9D3", true: "#8BAAA0" }}
        thumbColor={value ? "#234B45" : "#FFFFFF"}
      />
    </View>
  );

  const renderLink = (
    title: string,
    subtitle: string,
    Icon: typeof UserRound,
  ) => (
    <TouchableOpacity
      key={title}
      onPress={() => showComingSoon(title)}
      activeOpacity={0.7}
      className="flex-row items-center border-b border-[#F0EDE7] py-4"
    >
      <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#E9F1ED]">
        <Icon size={19} color="#234B45" />
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-sm font-semibold text-[#303530]">{title}</Text>
        <Text className="mt-1 text-xs text-[#888888]">{subtitle}</Text>
      </View>

      <ChevronRight size={18} color="#999999" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "left", "right"]}
    >
      <View className="flex-row items-center border-b border-[#E8E5DF] px-5 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 h-10 w-10 items-center justify-center rounded-full border border-[#E8E5DF] bg-white"
        >
          <ArrowLeft size={20} color="#234B45" />
        </TouchableOpacity>

        <View className="flex-1">
          <Text className="text-xl font-bold text-[#234B45]">Settings</Text>
          <Text className="mt-1 text-xs text-[#777777]">
            Manage your preferences
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 30 }}
      >
        <View className="mb-5 flex-row items-center rounded-[20px] bg-[#234B45] p-5">
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <Smartphone size={25} color="#E0C39B" />
          </View>
          <View className="ml-3 flex-1">
            <Text className="text-lg font-bold text-white">
              App Preferences
            </Text>
            <Text className="mt-1 text-xs text-[#D7E2DC]">
              Customize your furniture shopping experience.
            </Text>
          </View>
        </View>

        <Text className="mb-3 text-base font-bold text-[#252925]">
          Notifications
        </Text>

        <View className="mb-5 rounded-[18px] border border-[#EAE6DF] bg-white px-4">
          {renderToggle(
            "Order Updates",
            "Receive order and delivery notifications",
            orderNotifications,
            setOrderNotifications,
          )}
          {renderToggle(
            "Offers & Promotions",
            "Get updates about special offers",
            offersNotifications,
            setOffersNotifications,
          )}
          {renderToggle(
            "Notification Sound",
            "Enable sounds for app notifications",
            soundEnabled,
            setSoundEnabled,
          )}
        </View>

        <Text className="mb-3 text-base font-bold text-[#252925]">General</Text>

        <View className="mb-5 rounded-[18px] border border-[#EAE6DF] bg-white px-4">
          {renderLink(
            "Edit Profile",
            "Update your personal information",
            UserRound,
          )}
          {renderLink("Language", "English", Globe)}
          {renderLink("Appearance", "Light theme", Moon)}
        </View>

        <Text className="mb-3 text-base font-bold text-[#252925]">
          Privacy & Security
        </Text>

        <View className="rounded-[18px] border border-[#EAE6DF] bg-white px-4">
          {renderLink(
            "Privacy",
            "Manage your privacy preferences",
            ShieldCheck,
          )}
          {renderLink(
            "Password & Security",
            "Keep your account secure",
            LockKeyhole,
          )}
          {renderLink(
            "Notification Settings",
            "Notification preferences",
            Bell,
          )}
        </View>

        <View className="mt-5 flex-row items-center rounded-xl bg-[#E9F1ED] p-4">
          <Volume2 size={18} color="#234B45" />
          <Text className="ml-3 flex-1 text-xs leading-5 text-[#66736B]">
            Notification switches update this screen for now. Saving preferences
            permanently will be connected with the backend later.
          </Text>
        </View>

        <Text className="mt-5 text-center text-[10px] text-[#999999]">
          Furniture App · Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
