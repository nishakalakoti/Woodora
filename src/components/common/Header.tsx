import { router } from "expo-router";
import { Bell, Heart, MapPin, ShoppingCart, User } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View className="border-b border-[#E8E5DF] bg-[#F8F7F4] px-[18px] pb-[14px] pt-[18px]">
      {/* TOP ROW */}
      <View className="flex-row items-center justify-between">
        {/* USER */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/profile")}
          className="flex-row items-center"
        >
          <View className="h-[36px] w-[36px] items-center justify-center rounded-full bg-[#064E46]">
            <User size={18} color="#FFFFFF" strokeWidth={2} />
          </View>

          <View className="ml-[9px]">
            <Text className="text-[10px] font-medium uppercase tracking-[0.8px] text-[#777777]">
              Welcome back,
            </Text>

            <Text className="mt-[1px] text-[17px] font-bold leading-[20px] text-[#183D38]">
              Nisha
            </Text>
          </View>
        </TouchableOpacity>

        {/* ACTIONS */}
        <View className="flex-row items-center">
          {/* NOTIFICATIONS */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/notifications")}
            className="relative ml-[12px] h-[32px] w-[28px] items-center justify-center"
          >
            <Bell size={20} color="#626762" strokeWidth={1.8} />

            <View className="absolute right-[-2px] top-[-3px] h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#946334] px-[3px]">
              <Text className="text-[8px] font-bold text-white">2</Text>
            </View>
          </TouchableOpacity>

          {/* WISHLIST */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/wishlist")}
            className="relative ml-[10px] h-[32px] w-[28px] items-center justify-center"
          >
            <Heart size={21} color="#626762" strokeWidth={1.8} />

            <View className="absolute right-[-2px] top-[-3px] h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#946334] px-[3px]">
              <Text className="text-[8px] font-bold text-white">4</Text>
            </View>
          </TouchableOpacity>

          {/* CART */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/cart")}
            className="relative ml-[10px] h-[32px] w-[28px] items-center justify-center"
          >
            <ShoppingCart size={21} color="#626762" strokeWidth={1.8} />

            <View className="absolute right-[-2px] top-[-3px] h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#064E46] px-[3px]">
              <Text className="text-[8px] font-bold text-white">3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* LOCATION */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          // Location selector will be connected later.
        }}
        className="mt-[15px] flex-row items-center"
      >
        <MapPin size={16} color="#17665D" strokeWidth={2} />

        <Text className="ml-[6px] text-[12px] text-[#777777]">
          Delivering to:
        </Text>

        <Text className="ml-[3px] text-[12px] font-semibold text-[#222222]">
          Bageshwar
        </Text>

        <Text className="ml-[5px] text-[11px] text-[#777777]">▾</Text>
      </TouchableOpacity>
    </View>
  );
}
