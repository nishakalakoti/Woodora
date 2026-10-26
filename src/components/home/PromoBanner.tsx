import { ArrowRight } from "lucide-react-native";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PromoBanner() {
  return (
    <View className="mt-5 h-[190px] overflow-hidden rounded-[18px] bg-[#064E46]">

      {/* Background Image */}
      <Image
        source={require("../../../assets/images/banner.jpg")}
        resizeMode="cover"
        className="absolute inset-0 h-full w-full"
      />

      {/* Dark Overlay */}
      <View className="absolute inset-0 bg-[#063E38]/30" />

      {/* Content */}
      <View className="flex-1 justify-between p-[18px]">

        <View>
          <Text className="text-[10px] font-bold uppercase tracking-[1px] text-[#DCC8A8]">
            Premium Furniture
          </Text>

          <Text className="mt-[6px] max-w-[230px] text-[23px] font-bold leading-[28px] text-white">
            Make Your Home Beautiful
          </Text>

          <Text className="mt-[5px] max-w-[225px] text-[11px] leading-[16px] text-[#F2F2EE]">
            Discover elegant furniture made for modern homes.
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex-row items-center self-start rounded-[10px] bg-white px-[14px] py-[9px]"
        >
          <Text className="text-[12px] font-bold text-[#064E46]">
            Explore Collection
          </Text>

          <ArrowRight
            size={15}
            color="#064E46"
            strokeWidth={2.5}
            className="ml-[7px]"
          />
        </TouchableOpacity>

      </View>
    </View>
  );
}