import {
  ArrowRight,
  Heart,
  ShoppingCart,
  Star,
  Trash2,
} from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export type WishlistProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
};

type WishlistItemProps = {
  item: WishlistProduct;
  onRemove: (id: string) => void;
  onAddToCart?: (item: WishlistProduct) => void;
};

export default function WishlistItem({
  item,
  onRemove,
  onAddToCart,
}: WishlistItemProps) {
  const discount = Math.round(
    ((item.oldPrice - item.price) / item.oldPrice) * 100,
  );

  return (
    <View className="mb-4 overflow-hidden rounded-[20px] border border-[#EAE6DF] bg-white">
      <View className="flex-row p-3">
        {/* PRODUCT IMAGE */}
        <View className="relative">
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            className="h-[145px] w-[125px] rounded-[15px] bg-[#F0EDE7]"
          />

          <View className="absolute left-2 top-2 rounded-md bg-[#8B5E34] px-2 py-1">
            <Text className="text-[9px] font-bold text-white">
              {discount}% OFF
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => onRemove(item.id)}
            activeOpacity={0.8}
            className="absolute right-2 top-2 h-8 w-8 items-center justify-center rounded-full bg-white"
          >
            <Heart size={17} color="#C05245" fill="#C05245" />
          </TouchableOpacity>
        </View>

        {/* PRODUCT DETAILS */}
        <View className="ml-3 flex-1 justify-between py-1">
          <View>
            <Text className="text-[10px] font-semibold uppercase tracking-widest text-[#9A7651]">
              {item.category}
            </Text>

            <Text
              numberOfLines={2}
              className="mt-1.5 text-[15px] font-bold leading-5 text-[#252925]"
            >
              {item.name}
            </Text>

            <View className="mt-2 flex-row items-center">
              <Star size={13} color="#A36B2D" fill="#A36B2D" />

              <Text className="ml-1 text-xs font-semibold text-[#494D48]">
                {item.rating}
              </Text>

              <Text className="ml-2 text-[10px] text-[#858780]">In Stock</Text>
            </View>

            <View className="mt-3 flex-row flex-wrap items-center gap-x-2">
              <Text className="text-[16px] font-bold text-[#234B45]">
                ₹{item.price.toLocaleString("en-IN")}
              </Text>

              <Text className="text-xs text-[#A1A19B] line-through">
                ₹{item.oldPrice.toLocaleString("en-IN")}
              </Text>
            </View>

            <Text className="mt-1 text-[10px] font-medium text-[#34805B]">
              You save ₹{(item.oldPrice - item.price).toLocaleString("en-IN")}
            </Text>
          </View>
        </View>
      </View>

      {/* CARD ACTIONS */}
      <View className="flex-row items-center gap-3 border-t border-[#F0EDE7] px-3 py-3">
        <TouchableOpacity
          onPress={() => onAddToCart?.(item)}
          activeOpacity={0.8}
          className="flex-1 flex-row items-center justify-center gap-2 rounded-xl bg-[#234B45] py-3"
        >
          <ShoppingCart size={16} color="#FFFFFF" />

          <Text className="text-xs font-bold text-white">Add to Cart</Text>

          <ArrowRight size={14} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onRemove(item.id)}
          activeOpacity={0.8}
          className="h-[42px] w-[46px] items-center justify-center rounded-xl border border-[#E8E5DF] bg-[#FBFAF8]"
        >
          <Trash2 size={17} color="#8B5E34" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
