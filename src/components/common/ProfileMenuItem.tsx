import { ChevronRight } from "lucide-react-native";
import type { ComponentType } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ProfileIconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

type ProfileMenuItemProps = {
  title: string;
  subtitle: string;
  icon: ComponentType<ProfileIconProps>;
  onPress: () => void;
  showBorder?: boolean;
};

export default function ProfileMenuItem({
  title,
  subtitle,
  icon: Icon,
  onPress,
  showBorder = true,
}: ProfileMenuItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`flex-row items-center py-4 ${
        showBorder ? "border-b border-[#F0EDE7]" : ""
      }`}
    >
      <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#E9F1ED]">
        <Icon size={21} color="#234B45" strokeWidth={1.8} />
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-sm font-semibold text-[#252925]">{title}</Text>

        <Text className="mt-1 text-[10px] text-[#858780]">{subtitle}</Text>
      </View>

      <ChevronRight size={19} color="#999B94" />
    </TouchableOpacity>
  );
}
