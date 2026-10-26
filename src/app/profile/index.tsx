import ProfileMenuItem from "@/components/common/ProfileMenuItem";
import { router } from "expo-router";
import {
  ArrowLeft,
  Bell,
  CreditCard,
  Headphones,
  Heart,
  Home,
  LogOut,
  MapPin,
  Package,
  Pencil,
  Settings,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react-native";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const accountItems = [
  {
    title: "My Orders",
    subtitle: "Track and manage your orders",
    icon: Package,
  },
  {
    title: "Saved Addresses",
    subtitle: "Manage your delivery addresses",
    icon: MapPin,
  },
  {
    title: "Payment Methods",
    subtitle: "Your saved payment options",
    icon: CreditCard,
  },
  {
    title: "My Wishlist",
    subtitle: "Your favorite furniture",
    icon: Heart,
  },
];

const supportItems = [
  {
    title: "Notifications",
    subtitle: "Updates about your orders",
    icon: Bell,
  },
  {
    title: "Help & Support",
    subtitle: "We're here to help you",
    icon: Headphones,
  },
  {
    title: "Settings",
    subtitle: "Manage your preferences",
    icon: Settings,
  },
];

export default function ProfilePage() {
  const handleMenuPress = (title: string) => {
    switch (title) {
      case "My Orders":
        router.push("/my-orders");
        break;

      case "Saved Addresses":
        router.push("/addresses");
        break;

      case "Payment Methods":
        router.push("/payment-methods");
        break;

      case "My Wishlist":
        router.push("/wishlist");
        break;

      case "Notifications":
        router.push("/notifications");
        break;

      case "Help & Support":
        router.push("/help-support");
        break;

      case "Settings":
        router.push("/settings");
        break;

      case "Edit Profile":
        Alert.alert(
          "Edit Profile",
          "Profile editing will be implemented later.",
        );
        break;

      default:
        Alert.alert(title, "This feature will be implemented later.");
    }
  };

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        style: "destructive",
        onPress: () => {
          Alert.alert(
            "Coming Soon",
            "Authentication and logout will be connected later.",
          );
        },
      },
    ]);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "left", "right"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 12,
          paddingBottom: 30,
        }}
      >
        {/* MOBILE HEADER */}
        <View className="mb-5 flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              onPress={() => router.push("/")}
              activeOpacity={0.7}
              className="h-10 w-10 items-center justify-center rounded-full border border-[#E8E5DF] bg-white"
            >
              <ArrowLeft size={20} color="#234B45" />
            </TouchableOpacity>

            <View>
              <Text className="text-[22px] font-bold text-[#234B45]">
                My Profile
              </Text>

              <Text className="mt-0.5 text-[11px] text-[#777777]">
                Your account & preferences
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/")}
            activeOpacity={0.7}
            className="h-10 w-10 items-center justify-center rounded-full bg-[#234B45]"
          >
            <Home size={19} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* PROFILE CARD */}
        <View className="mb-5 overflow-hidden rounded-[22px] bg-[#234B45] p-5">
          <View className="flex-row items-center">
            <View className="h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-[#D9C19E] bg-[#E9F1ED]">
              <UserRound size={35} color="#234B45" />
            </View>

            <View className="ml-4 flex-1">
              <Text className="text-[10px] font-semibold uppercase tracking-[2px] text-[#D9C19E]">
                WELCOME BACK
              </Text>

              <Text className="mt-1 text-[22px] font-bold text-white">
                Nisha
              </Text>

              <Text className="mt-1 text-xs text-[#D7E2DC]">
                Furniture lover
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => handleMenuPress("Edit Profile")}
              activeOpacity={0.8}
              className="h-10 w-10 items-center justify-center rounded-full bg-white/15"
            >
              <Pencil size={17} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View className="mt-5 flex-row items-center border-t border-white/15 pt-4">
            <ShieldCheck size={16} color="#D9C19E" />

            <Text className="ml-2 flex-1 text-[11px] text-[#D7E2DC]">
              Your account, your home, your style.
            </Text>

            <Star size={15} color="#D9C19E" />
          </View>
        </View>

        {/* ACCOUNT SECTION */}
        <View className="mb-5">
          <Text className="mb-3 text-[17px] font-bold text-[#252925]">
            My Account
          </Text>

          <View className="overflow-hidden rounded-[18px] border border-[#EAE6DF] bg-white px-3">
            {accountItems.map((item, index) => (
              <ProfileMenuItem
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                showBorder={index !== accountItems.length - 1}
                onPress={() => handleMenuPress(item.title)}
              />
            ))}
          </View>
        </View>

        {/* PREFERENCES & SUPPORT */}
        <View className="mb-5">
          <Text className="mb-3 text-[17px] font-bold text-[#252925]">
            Preferences & Support
          </Text>

          <View className="overflow-hidden rounded-[18px] border border-[#EAE6DF] bg-white px-3">
            {supportItems.map((item, index) => (
              <ProfileMenuItem
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                showBorder={index !== supportItems.length - 1}
                onPress={() => handleMenuPress(item.title)}
              />
            ))}
          </View>
        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          city
          onPress={handleLogout}
          activeOpacity={0.8}
          className="mb-4 flex-row items-center justify-center gap-2 rounded-xl border border-[#E9D5D0] bg-[#FBECE8] py-4"
        >
          <LogOut size={18} color="#B84C3B" />

          <Text className="text-sm font-bold text-[#B84C3B]">Log Out</Text>
        </TouchableOpacity>

        {/* BACK TO HOME */}
        <TouchableOpacity
          onPress={() => router.push("/")}
          activeOpacity={0.8}
          className="mb-4 flex-row items-center justify-center gap-2 rounded-xl bg-[#234B45] py-4"
        >
          <Home size={17} color="#FFFFFF" />

          <Text className="text-sm font-bold text-white">Back to Home</Text>
        </TouchableOpacity>

        <Text className="text-center text-[10px] text-[#999999]">
          Furniture App · Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
