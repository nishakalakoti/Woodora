import { router } from "expo-router";
import { ArrowLeft, Heart } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

type WishlistHeaderProps = {
  itemCount: number;
};

export default function WishlistHeader({ itemCount }: WishlistHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 py-4">
      <View className="flex-row items-center gap-3">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={23} color="#234B45" />
        </TouchableOpacity>

        <View>
          <Text className="text-xl font-bold text-[#234B45]">My Wishlist</Text>
          <Text className="mt-1 text-xs text-[#777777]">
            Your favorite furniture
          </Text>
        </View>
      </View>

      <View className="flex-row items-center gap-2 rounded-full bg-[#E9F1ED] px-3 py-2">
        <Heart size={17} color="#234B45" />
        <Text className="font-bold text-[#234B45]">{itemCount}</Text>
      </View>
    </View>
  );
}
