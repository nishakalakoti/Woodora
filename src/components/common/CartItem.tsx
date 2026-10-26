import { Minus, Plus, Star, Trash2 } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export type CartProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
  quantity: number;
};

type CartItemProps = {
  item: CartProduct;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
};

export default function CartItem({
  item,
  onRemove,
  onQuantityChange,
}: CartItemProps) {
  const discount =
    item.oldPrice > 0
      ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
      : 0;

  return (
    <View className="mb-4 overflow-hidden rounded-[18px] border border-[#EAE6DF] bg-white">
      <View className="flex-row p-3">
        {/* PRODUCT IMAGE */}
        <View className="relative">
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            className="h-[125px] w-[112px] rounded-xl bg-[#F0EDE7]"
          />

          <View className="absolute left-2 top-2 rounded-md bg-[#8B5E34] px-2 py-1">
            <Text className="text-[9px] font-bold text-white">
              {discount}% OFF
            </Text>
          </View>
        </View>

        {/* PRODUCT DETAILS */}
        <View className="ml-3 flex-1 justify-between py-1">
          <View>
            <Text className="text-[10px] font-semibold uppercase tracking-wider text-[#9A7651]">
              {item.category}
            </Text>

            <Text
              numberOfLines={2}
              className="mt-1 text-sm font-bold leading-5 text-[#252925]"
            >
              {item.name}
            </Text>

            <View className="mt-2 flex-row items-center">
              <Star size={12} color="#A36B2D" fill="#A36B2D" />

              <Text className="ml-1 text-[11px] font-semibold text-[#494D48]">
                {item.rating}
              </Text>

              <Text className="ml-2 text-[10px] text-[#34805B]">In Stock</Text>
            </View>

            <View className="mt-2 flex-row flex-wrap items-center gap-x-2">
              <Text className="text-[15px] font-bold text-[#234B45]">
                ₹{item.price.toLocaleString("en-IN")}
              </Text>

              <Text className="text-[10px] text-[#A1A19B] line-through">
                ₹{item.oldPrice.toLocaleString("en-IN")}
              </Text>
            </View>
          </View>

          {/* QUANTITY CONTROLS */}
          <View className="mt-3 flex-row items-center justify-between">
            <View className="flex-row items-center rounded-lg border border-[#E8E5DF]">
              <TouchableOpacity
                onPress={() =>
                  onQuantityChange(item.id, Math.max(1, item.quantity - 1))
                }
                disabled={item.quantity <= 1}
                className="h-8 w-8 items-center justify-center"
              >
                <Minus
                  size={14}
                  color={item.quantity <= 1 ? "#C8C8C2" : "#234B45"}
                />
              </TouchableOpacity>

              <Text className="min-w-[24px] text-center text-xs font-bold text-[#252925]">
                {item.quantity}
              </Text>

              <TouchableOpacity
                onPress={() => onQuantityChange(item.id, item.quantity + 1)}
                className="h-8 w-8 items-center justify-center"
              >
                <Plus size={14} color="#234B45" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => onRemove(item.id)}
              activeOpacity={0.7}
              className="h-8 w-8 items-center justify-center rounded-lg bg-[#FBECE8]"
            >
              <Trash2 size={15} color="#B84C3B" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* ITEM TOTAL */}
      <View className="flex-row items-center justify-between border-t border-[#F0EDE7] px-3 py-3">
        <Text className="text-[11px] text-[#777777]">
          {item.quantity} × ₹{item.price.toLocaleString("en-IN")}
        </Text>

        <Text className="text-sm font-bold text-[#234B45]">
          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
        </Text>
      </View>
    </View>
  );
}
