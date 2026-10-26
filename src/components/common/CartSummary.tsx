import { ArrowRight, ShieldCheck, Truck } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

type CartSummaryProps = {
  subtotal: number;
  oldTotal: number;
  delivery: number;
  onCheckout: () => void;
};

export default function CartSummary({
  subtotal,
  oldTotal,
  delivery,
  onCheckout,
}: CartSummaryProps) {
  const savings = oldTotal - subtotal;
  const total = subtotal + delivery;

  const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

  return (
    <View className="mt-2 rounded-[20px] border border-[#EAE6DF] bg-white p-4">
      <Text className="text-base font-bold text-[#252925]">Order Summary</Text>

      <View className="mt-4 flex-row items-center justify-between">
        <Text className="text-sm text-[#777777]">Subtotal</Text>
        <Text className="text-sm font-semibold text-[#252925]">
          {formatPrice(subtotal)}
        </Text>
      </View>

      <View className="mt-3 flex-row items-center justify-between">
        <Text className="text-sm text-[#777777]">Delivery</Text>
        <Text
          className={`text-sm font-semibold ${
            delivery === 0 ? "text-[#34805B]" : "text-[#252925]"
          }`}
        >
          {delivery === 0 ? "FREE" : formatPrice(delivery)}
        </Text>
      </View>

      <View className="mt-3 flex-row items-center justify-between">
        <Text className="text-sm text-[#777777]">Product savings</Text>
        <Text className="text-sm font-semibold text-[#34805B]">
          −{formatPrice(savings)}
        </Text>
      </View>

      <View className="my-4 border-t border-dashed border-[#E5E1D9]" />

      <View className="flex-row items-center justify-between">
        <Text className="text-base font-bold text-[#252925]">Total Amount</Text>
        <Text className="text-xl font-bold text-[#234B45]">
          {formatPrice(total)}
        </Text>
      </View>

      <View className="mt-4 flex-row items-center rounded-xl bg-[#E9F1ED] p-3">
        <Truck size={18} color="#234B45" />

        <Text className="ml-2 flex-1 text-[11px] leading-4 text-[#234B45]">
          Free delivery on orders above ₹5,000
        </Text>
      </View>

      <TouchableOpacity
        onPress={onCheckout}
        activeOpacity={0.85}
        className="mt-4 h-[50px] flex-row items-center justify-center gap-2 rounded-xl bg-[#234B45]"
      >
        <Text className="text-sm font-bold text-white">
          Proceed to Checkout
        </Text>
        <ArrowRight size={17} color="#FFFFFF" />
      </TouchableOpacity>

      <View className="mt-3 flex-row items-center justify-center gap-1.5">
        <ShieldCheck size={14} color="#858780" />
        <Text className="text-[10px] text-[#858780]">Secure checkout</Text>
      </View>
    </View>
  );
}
