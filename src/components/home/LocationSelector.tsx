import { Text, TouchableOpacity } from "react-native";

export default function LocationSelector() {
  return (
    <TouchableOpacity className="mt-[22px]">
      <Text className="text-[12px] text-muted">
        📍 Delivering to
      </Text>

      <Text className="mt-1 text-[16px] font-semibold text-text">
        Select District ▾
      </Text>
    </TouchableOpacity>
  );
}