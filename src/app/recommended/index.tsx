import { router } from "expo-router";
import { ArrowLeft, Heart, MapPin, Plus, Star } from "lucide-react-native";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { products } from "../../data/products";

const recommendedProductIds = [
  "recommended-sofa",
  "recommended-bed",
  "recommended-table",
  "recommended-chair",
  "recommended-wardrobe",
  "recommended-desk",
];

export default function RecommendedPage() {
  const { width } = useWindowDimensions();

  const recommendedProducts = products.filter((product) =>
    recommendedProductIds.includes(product.id),
  );

  const horizontalPadding = 16;
  const gap = 12;

  const cardWidth = (width - horizontalPadding * 2 - gap) / 2;

  return (
    <SafeAreaView className="flex-1 bg-[#F8F7F4]" edges={["top", "bottom"]}>
      {/* HEADER */}
      <View className="border-b border-[#E8E5DF] px-4 pb-4 pt-3">
        <View className="flex-row items-center">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <ArrowLeft size={21} color="#234B45" />
          </TouchableOpacity>

          <View className="ml-3 flex-1">
            <Text className="text-lg font-bold text-[#222222]">
              Recommended For You
            </Text>

            <Text className="mt-1 text-xs text-[#888888]">
              {recommendedProducts.length} products available
            </Text>
          </View>
        </View>
      </View>

      {/* PRODUCT LIST */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: horizontalPadding,
          paddingTop: 16,
          paddingBottom: 30,
        }}
      >
        <View className="flex-row flex-wrap justify-between">
          {recommendedProducts.map((product) => (
            <TouchableOpacity
              key={product.id}
              activeOpacity={0.9}
              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: { id: product.id },
                })
              }
              style={{ width: cardWidth }}
              className="mb-4 overflow-hidden rounded-2xl border border-[#ECE8E2] bg-white"
            >
              {/* PRODUCT IMAGE */}
              <View className="relative h-[135px] bg-[#F2F0EA]">
                <Image
                  source={{ uri: product.image }}
                  resizeMode="cover"
                  className="h-full w-full"
                />

                {/* WISHLIST BUTTON */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={(event) => event.stopPropagation()}
                  className="absolute right-2 top-2 h-9 w-9 items-center justify-center rounded-full bg-white"
                >
                  <Heart size={18} color="#777777" strokeWidth={1.8} />
                </TouchableOpacity>
              </View>

              {/* PRODUCT DETAILS */}
              <View className="p-3">
                {/* RATING */}
                <View className="flex-row items-center">
                  <Star size={13} color="#946334" fill="#946334" />

                  <Text className="ml-1 text-xs font-semibold text-[#333333]">
                    {product.rating}
                  </Text>

                  <Text className="ml-1 text-[10px] text-[#999999]">
                    ({product.reviews})
                  </Text>
                </View>

                {/* PRODUCT NAME */}
                <Text
                  numberOfLines={2}
                  className="mt-2 text-sm font-bold leading-5 text-[#222222]"
                >
                  {product.name}
                </Text>

                {/* LOCATION */}
                <View className="mt-2 flex-row items-center">
                  <MapPin size={12} color="#4D827A" />

                  <Text
                    numberOfLines={1}
                    className="ml-1 flex-1 text-[10px] text-[#777777]"
                  >
                    {product.location}
                  </Text>
                </View>

                {/* PRICE AND CART */}
                <View className="mt-3 flex-row items-center justify-between">
                  <View className="flex-1">
                    <Text
                      numberOfLines={1}
                      className="text-sm font-bold text-[#064E46]"
                    >
                      {product.price}
                    </Text>

                    <Text
                      numberOfLines={1}
                      className="mt-1 text-[10px] text-[#999999] line-through"
                    >
                      {product.oldPrice}
                    </Text>
                  </View>

                  {/* ADD TO CART */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={(event) => event.stopPropagation()}
                    className="ml-2 h-9 w-9 items-center justify-center rounded-xl bg-[#064E46]"
                  >
                    <Plus size={19} color="#FFFFFF" strokeWidth={2.5} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* EMPTY STATE */}
        {recommendedProducts.length === 0 && (
          <View className="items-center py-16">
            <Text className="text-base font-semibold text-[#444444]">
              No recommended products found
            </Text>

            <Text className="mt-2 text-center text-xs text-[#888888]">
              Recommended products will appear here soon.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
