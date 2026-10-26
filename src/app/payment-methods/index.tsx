import { router } from "expo-router";
import {
    ArrowLeft,
    CheckCircle2,
    ChevronRight,
    CreditCard,
    LockKeyhole,
    Plus,
    Smartphone,
    Wallet,
} from "lucide-react-native";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const paymentMethods = [
  {
    id: "1",
    type: "card",
    title: "Credit / Debit Card",
    subtitle: "Visa ending in 4242",
    details: "**** **** **** 4242",
    isDefault: true,
  },
  {
    id: "2",
    type: "upi",
    title: "UPI",
    subtitle: "Your preferred UPI app",
    details: "UPI payment",
    isDefault: false,
  },
  {
    id: "3",
    type: "cod",
    title: "Cash on Delivery",
    subtitle: "Pay when your order arrives",
    details: "Available at checkout",
    isDefault: false,
  },
];

export default function PaymentMethodsPage() {
  const handleAddPayment = () => {
    Alert.alert(
      "Add Payment Method",
      "Secure payment method setup will be connected later.",
    );
  };

  const handleSelectPayment = (title: string) => {
    Alert.alert(
      title,
      "Payment selection will be available when checkout is connected.",
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
            Payment Methods
          </Text>
          <Text className="mt-1 text-xs text-[#777777]">
            Manage your payment options
          </Text>
        </View>

        <View className="h-10 w-10 items-center justify-center rounded-full bg-[#E9F1ED]">
          <Wallet size={21} color="#234B45" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 30 }}
      >
        {/* SECURITY BANNER */}
        <View className="mb-6 flex-row items-center rounded-[20px] bg-[#234B45] p-5">
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <LockKeyhole size={24} color="#E0C39B" />
          </View>

          <View className="ml-3 flex-1">
            <Text className="text-sm font-bold text-white">
              Secure Payments
            </Text>
            <Text className="mt-1 text-xs leading-5 text-[#D7E2DC]">
              Your payment information will be handled securely.
            </Text>
          </View>
        </View>

        {/* PAYMENT OPTIONS */}
        <View className="mb-4 flex-row items-center justify-between">
          <View>
            <Text className="text-lg font-bold text-[#252925]">
              Saved Methods
            </Text>
            <Text className="mt-1 text-xs text-[#777777]">
              Choose your preferred payment option
            </Text>
          </View>
        </View>

        {paymentMethods.map((method) => {
          const Icon =
            method.type === "card"
              ? CreditCard
              : method.type === "upi"
                ? Smartphone
                : Wallet;

          return (
            <TouchableOpacity
              key={method.id}
              activeOpacity={0.8}
              onPress={() => handleSelectPayment(method.title)}
              className="mb-3 flex-row items-center rounded-[18px] border border-[#EAE6DF] bg-white p-4"
            >
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-[#E9F1ED]">
                <Icon size={22} color="#234B45" />
              </View>

              <View className="ml-3 flex-1">
                <View className="flex-row flex-wrap items-center">
                  <Text className="text-sm font-bold text-[#252925]">
                    {method.title}
                  </Text>

                  {method.isDefault && (
                    <View className="ml-2 mt-1 rounded-full bg-[#E9F1ED] px-2 py-1">
                      <Text className="text-[9px] font-bold text-[#287A50]">
                        DEFAULT
                      </Text>
                    </View>
                  )}
                </View>

                <Text className="mt-1 text-xs text-[#777777]">
                  {method.subtitle}
                </Text>

                <Text className="mt-1 text-[10px] text-[#9A7651]">
                  {method.details}
                </Text>
              </View>

              {method.isDefault ? (
                <CheckCircle2 size={20} color="#287A50" />
              ) : (
                <ChevronRight size={19} color="#999999" />
              )}
            </TouchableOpacity>
          );
        })}

        {/* ADD PAYMENT METHOD */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleAddPayment}
          className="mt-2 flex-row items-center justify-center rounded-xl border border-dashed border-[#234B45] bg-[#E9F1ED] py-4"
        >
          <Plus size={19} color="#234B45" />
          <Text className="ml-2 text-sm font-bold text-[#234B45]">
            Add Payment Method
          </Text>
        </TouchableOpacity>

        {/* NOTE */}
        <View className="mt-5 flex-row items-start rounded-xl border border-[#EAE6DF] bg-white p-3">
          <LockKeyhole size={16} color="#8B5E34" />
          <Text className="ml-2 flex-1 text-[11px] leading-5 text-[#777777]">
            These are sample payment options for UI preview. No real card
            details are saved and no payment will be processed.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
