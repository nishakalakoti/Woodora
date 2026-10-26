import { router } from "expo-router";
import { ArrowLeft, Clock3, MapPin, Star } from "lucide-react-native";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { products } from "../../data/products";

const recentlyViewedProductIds = [
  "recent-chair",
  "recent-table",
  "recent-sofa",
  "recent-bed",
  "recent-wardrobe",
  "recent-desk",
];

export default function RecentlyViewedPage() {
  const { width } = useWindowDimensions();

  const recentlyViewed = products.filter((product) =>
    recentlyViewedProductIds.includes(product.id),
  );

  const horizontalPadding = 16;
  const gap = 12;
  const cardWidth = (width - horizontalPadding * 2 - gap) / 2;

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "bottom", "left", "right"]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8F7F4"
        translucent={false}
      />

      <View className="flex-1 bg-[#F8F7F4]">
        {/* HEADER */}
        <View className="border-b border-[#E8E5DF] px-4 pb-4 pt-2">
          <View className="flex-row items-center">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.back()}
              className="h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"
            >
              <ArrowLeft size={20} color="#234B45" strokeWidth={2} />
            </TouchableOpacity>

            <View className="ml-3 flex-1">
              <View className="flex-row items-center">
                <Clock3 size={17} color="#17665D" strokeWidth={2} />

                <Text
                  numberOfLines={1}
                  className="ml-2 flex-1 text-lg font-bold text-[#222222]"
                >
                  Recently Viewed
                </Text>
              </View>

              <Text className="mt-1 text-xs text-[#888888]">
                {recentlyViewed.length} products viewed
              </Text>
            </View>
          </View>
        </View>

        {/* PRODUCTS */}
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: horizontalPadding,
            paddingTop: 16,
            paddingBottom: 30,
          }}
        >
          <View className="flex-row flex-wrap justify-between">
            {recentlyViewed.map((product) => (
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
                {/* IMAGE */}
                <View className="h-[125px] bg-[#F2F0EA]">
                  <Image
                    source={{ uri: product.image }}
                    resizeMode="cover"
                    className="h-full w-full"
                  />
                </View>

                {/* DETAILS */}
                <View className="p-3">
                  <View className="flex-row items-center">
                    <Star size={12} color="#946334" fill="#946334" />

                    <Text className="ml-1 text-xs font-semibold text-[#333333]">
                      {product.rating}
                    </Text>

                    <Text className="ml-1 text-[10px] text-[#999999]">
                      ({product.reviews})
                    </Text>
                  </View>

                  <Text
                    numberOfLines={2}
                    className="mt-2 text-sm font-bold leading-5 text-[#222222]"
                  >
                    {product.name}
                  </Text>

                  <View className="mt-2 flex-row items-center">
                    <MapPin size={12} color="#4D827A" strokeWidth={2} />

                    <Text
                      numberOfLines={1}
                      className="ml-1 flex-1 text-[10px] text-[#777777]"
                    >
                      {product.location}
                    </Text>
                  </View>

                  <View className="mt-3">
                    <Text
                      numberOfLines={1}
                      className="text-sm font-bold text-[#064E46]"
                    >
                      {product.price}
                    </Text>

                    <Text className="mt-1 text-[10px] text-[#999999] line-through">
                      {product.oldPrice}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* EMPTY STATE */}
          {recentlyViewed.length === 0 && (
            <View className="items-center py-16">
              <Clock3 size={32} color="#17665D" strokeWidth={1.5} />

              <Text className="mt-3 text-base font-semibold text-[#444444]">
                No recently viewed products
              </Text>

              <Text className="mt-2 text-center text-xs text-[#888888]">
                Products you view will appear here.
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
