import { router } from "expo-router";
import {
    ArrowLeft,
    BriefcaseBusiness,
    Check,
    ChevronRight,
    Home,
    MapPin,
    Plus,
    Trash2,
} from "lucide-react-native";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const initialAddresses = [
  {
    id: "1",
    type: "Home",
    name: "Nisha Kalakoti",
    phone: "+91 98765 43210",
    address: "Near Main Market, Bageshwar",
    city: "Bageshwar",
    state: "Uttarakhand",
    pincode: "263642",
    isDefault: true,
  },
  {
    id: "2",
    type: "Work",
    name: "Nisha Kalakoti",
    phone: "+91 98765 43210",
    address: "Office Address",
    city: "Dehradun",
    state: "Uttarakhand",
    pincode: "248001",
    isDefault: false,
  },
];

export default function AddressesPage() {
  const handleAddAddress = () => {
    Alert.alert("Add New Address", "The address form will be connected next.");
  };

  const handleDelete = (type: string) => {
    Alert.alert(
      "Delete Address",
      `Do you want to delete your ${type.toLowerCase()} address?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () =>
            Alert.alert(
              "Coming Soon",
              "Address management will be connected later.",
            ),
        },
      ],
    );
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "left", "right"]}
    >
      {/* HEADER */}
      <View className="flex-row items-center border-b border-[#E8E5DF] px-5 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 h-10 w-10 items-center justify-center rounded-full border border-[#E8E5DF] bg-white"
        >
          <ArrowLeft size={20} color="#234B45" />
        </TouchableOpacity>

        <View className="flex-1">
          <Text className="text-xl font-bold text-[#234B45]">
            Saved Addresses
          </Text>
          <Text className="mt-1 text-xs text-[#777777]">
            Manage your delivery locations
          </Text>
        </View>

        <View className="h-10 w-10 items-center justify-center rounded-full bg-[#E9F1ED]">
          <MapPin size={21} color="#234B45" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 30 }}
      >
        {/* INFO BANNER */}
        <View className="mb-5 flex-row items-center rounded-2xl bg-[#234B45] p-4">
          <View className="h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <MapPin size={23} color="#E0C39B" />
          </View>

          <View className="ml-3 flex-1">
            <Text className="text-sm font-bold text-white">
              Your delivery locations
            </Text>
            <Text className="mt-1 text-xs leading-5 text-[#D7E2DC]">
              Save your addresses for a faster checkout.
            </Text>
          </View>
        </View>

        {/* ADDRESS TITLE */}
        <View className="mb-4 flex-row items-center justify-between">
          <View>
            <Text className="text-lg font-bold text-[#252925]">
              My Addresses
            </Text>
            <Text className="mt-1 text-xs text-[#777777]">
              {initialAddresses.length} saved locations
            </Text>
          </View>
        </View>

        {/* ADDRESS CARDS */}
        {initialAddresses.map((item) => {
          const Icon = item.type === "Home" ? Home : BriefcaseBusiness;

          return (
            <View
              key={item.id}
              className="mb-4 rounded-[20px] border border-[#EAE6DF] bg-white p-4"
            >
              {/* CARD HEADER */}
              <View className="mb-4 flex-row items-center">
                <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#E9F1ED]">
                  <Icon size={21} color="#234B45" />
                </View>

                <View className="ml-3 flex-1">
                  <View className="flex-row items-center">
                    <Text className="text-sm font-bold text-[#252925]">
                      {item.type}
                    </Text>

                    {item.isDefault && (
                      <View className="ml-2 rounded-full bg-[#E9F1ED] px-2 py-1">
                        <Text className="text-[9px] font-bold text-[#287A50]">
                          DEFAULT
                        </Text>
                      </View>
                    )}
                  </View>

                  <Text className="mt-1 text-[10px] text-[#888888]">
                    Delivery address
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => handleDelete(item.type)}
                  className="h-9 w-9 items-center justify-center rounded-full bg-[#FBECE8]"
                >
                  <Trash2 size={16} color="#B84C3B" />
                </TouchableOpacity>
              </View>

              <View className="border-t border-[#F0EDE7] pt-3">
                <Text className="text-sm font-bold text-[#303530]">
                  {item.name}
                </Text>

                <Text className="mt-2 text-xs leading-5 text-[#777777]">
                  {item.address},{"\n"}
                  {item.city}, {item.state} - {item.pincode}
                </Text>

                <Text className="mt-2 text-xs text-[#555A55]">
                  Phone: {item.phone}
                </Text>
              </View>

              {item.isDefault && (
                <View className="mt-4 flex-row items-center border-t border-[#F0EDE7] pt-3">
                  <Check size={15} color="#287A50" />
                  <Text className="ml-2 text-[11px] font-semibold text-[#287A50]">
                    Default delivery address
                  </Text>
                </View>
              )}
            </View>
          );
        })}

        {/* ADD ADDRESS BUTTON */}
        <TouchableOpacity
          onPress={handleAddAddress}
          activeOpacity={0.8}
          className="mt-1 flex-row items-center justify-center rounded-xl border border-dashed border-[#234B45] bg-[#E9F1ED] py-4"
        >
          <Plus size={19} color="#234B45" />
          <Text className="ml-2 text-sm font-bold text-[#234B45]">
            Add New Address
          </Text>
          <ChevronRight size={17} color="#234B45" />
        </TouchableOpacity>

        <Text className="mt-4 text-center text-[10px] text-[#999999]">
          Sample addresses for UI preview only.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
