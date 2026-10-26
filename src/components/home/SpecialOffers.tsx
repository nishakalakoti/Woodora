import {
  ArrowRight,
  Clock3,
  Percent,
} from "lucide-react-native";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SpecialOffers() {
  return (
    <View className="mt-2 pb-6">

      {/* SECTION TITLE */}
      <View className="mb-[12px] flex-row items-center justify-between">
        <Text className="text-[17px] font-bold text-[#222222]">
          Special Offers
        </Text>

        <View className="flex-row items-center">
          <Clock3
            size={13}
            color="#946334"
            strokeWidth={2}
          />

          <Text className="ml-[4px] text-[9px] font-medium text-[#777777]">
            Limited time
          </Text>
        </View>
      </View>

      {/* OFFER CARD */}
      <View className="relative h-[155px] overflow-hidden rounded-[16px] bg-[#064E46]">

        {/* BACKGROUND IMAGE */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
          }}
          resizeMode="cover"
          className="absolute right-0 h-full w-[55%]"
        />

        {/* DARK OVERLAY */}
        <View className="absolute inset-0 bg-[#064E46]/75" />

        {/* CONTENT */}
        <View className="flex-1 justify-center px-[16px]">

          {/* OFFER BADGE */}
          <View className="mb-[7px] flex-row items-center self-start rounded-[5px] bg-[#946334] px-[7px] py-[4px]">

            <Percent
              size={10}
              color="#FFFFFF"
              strokeWidth={2.5}
            />

            <Text className="ml-[3px] text-[8px] font-bold text-white">
              UP TO 30% OFF
            </Text>

          </View>

          {/* TITLE */}
          <Text className="max-w-[155px] text-[18px] font-bold leading-[22px] text-white">
            Refresh Your Home
          </Text>

          {/* DESCRIPTION */}
          <Text className="mt-[4px] max-w-[155px] text-[9px] leading-[13px] text-[#D9E5E2]">
            Get special prices on selected furniture.
          </Text>

          {/* BUTTON */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="mt-[10px] flex-row items-center self-start rounded-[7px] bg-white px-[10px] py-[7px]"
          >
            <Text className="text-[9px] font-bold text-[#064E46]">
              Shop Deals
            </Text>

            <ArrowRight
              size={12}
              color="#064E46"
              strokeWidth={2.5}
              className="ml-[4px]"
            />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}