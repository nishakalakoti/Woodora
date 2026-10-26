import WishlistHeader from "@/components/common/WishlistHeader";
import WishlistItem, {
    WishlistProduct,
} from "@/components/common/WishlistItem";
import { router } from "expo-router";
import { Heart, ShoppingBag } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const initialWishlist: WishlistProduct[] = [
  {
    id: "1",
    name: "Kafni Low Bed",
    category: "Beds",
    price: 54200,
    oldPrice: 66000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "2",
    name: "Saryu Refectory Table",
    category: "Tables",
    price: 42800,
    oldPrice: 49000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "3",
    name: "Modern Comfort Sofa",
    category: "Sofas",
    price: 35900,
    oldPrice: 42000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistProduct[]>(initialWishlist);

  const removeItem = (id: string) => {
    setWishlist((current) => current.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F8F7F4]">
      <WishlistHeader itemCount={wishlist.length} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 24 }}
      >
        <View className="mb-5 flex-row items-center justify-between">
          <View>
            <Text className="text-base font-bold text-[#222222]">
              Saved Furniture
            </Text>
            <Text className="mt-1 text-xs text-[#777777]">
              Items you love, all in one place
            </Text>
          </View>

          <Heart size={22} color="#234B45" />
        </View>

        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <WishlistItem key={item.id} item={item} onRemove={removeItem} />
          ))
        ) : (
          <View className="mt-16 items-center px-6">
            <View className="mb-4 h-20 w-20 items-center justify-center rounded-full bg-[#E9F1ED]">
              <Heart size={36} color="#234B45" />
            </View>

            <Text className="text-lg font-bold text-[#234B45]">
              Your wishlist is empty
            </Text>

            <Text className="mt-2 text-center text-sm text-[#777777]">
              Save your favorite furniture here and find it easily later.
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/")}
              className="mt-5 flex-row items-center gap-2 rounded-xl bg-[#234B45] px-5 py-3"
            >
              <ShoppingBag size={17} color="#FFFFFF" />
              <Text className="font-semibold text-white">
                Explore Furniture
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
