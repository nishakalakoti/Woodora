import { router } from "expo-router";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Plus,
  Star,
} from "lucide-react-native";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { products } from "../../data/products";

const popularProductIds = [
  "popular-bed-kafni",
  "popular-table-saryu",
  "popular-mandir-bagnath",
  "popular-chair-trishul",
];

export default function PopularProductsPage() {
  const { width } = useWindowDimensions();

  const popularProducts = products.filter((product) =>
    popularProductIds.includes(product.id)
  );

  const horizontalPadding = 18;
  const cardGap = 12;

  const cardWidth =
    (width - horizontalPadding * 2 - cardGap) / 2;

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "bottom"]}
    >
      <View className="flex-1 bg-[#F8F7F4]">

        {/* HEADER */}
        <View className="border-b border-[#E8E5DF] bg-[#F8F7F4] px-[18px] pb-[13px] pt-[10px]">
          <View className="flex-row items-center">

            {/* BACK */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.back()}
              className="h-[38px] w-[38px] items-center justify-center rounded-full bg-white"
            >
              <ArrowLeft
                size={19}
                color="#234B45"
                strokeWidth={2}
              />
            </TouchableOpacity>

            {/* TITLE */}
            <View className="ml-[10px]">
              <Text className="text-[18px] font-bold text-[#222222]">
                Popular Furniture
              </Text>

              <Text className="mt-[1px] text-[9px] text-[#888888]">
                {popularProducts.length} products available
              </Text>
            </View>

          </View>
        </View>

        {/* PRODUCTS */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: horizontalPadding,
            paddingTop: 16,
            paddingBottom: 35,
          }}
        >
          <View className="flex-row flex-wrap justify-between">

            {popularProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                activeOpacity={0.9}
                onPress={() =>
                  router.push({
                    pathname: "/product/[id]",
                    params: {
                      id: product.id,
                    },
                  })
                }
                style={{
                  width: cardWidth,
                }}
                className="mb-[14px] overflow-hidden rounded-[14px] border border-[#ECE8E2] bg-white"
              >

                {/* IMAGE */}
                <View className="relative h-[125px] bg-[#F2F0EA]">

                  <Image
                    source={{ uri: product.image }}
                    resizeMode="cover"
                    className="h-full w-full"
                  />

                  {/* DISCOUNT */}
                  <View className="absolute left-[7px] top-[7px] rounded-[5px] bg-[#946334] px-[6px] py-[4px]">
                    <Text className="text-[7px] font-bold text-white">
                      {product.discount}
                    </Text>
                  </View>

                  {/* WISHLIST */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={(event) =>
                      event.stopPropagation()
                    }
                    className="absolute right-[7px] top-[7px] h-[28px] w-[28px] items-center justify-center rounded-full bg-white"
                  >
                    <Heart
                      size={16}
                      color="#777777"
                      strokeWidth={1.8}
                    />
                  </TouchableOpacity>

                </View>

                {/* DETAILS */}
                <View className="p-[9px]">

                  {/* RATING */}
                  <View className="flex-row items-center">

                    <Star
                      size={11}
                      color="#946334"
                      fill="#946334"
                    />

                    <Text className="ml-[3px] text-[10px] font-semibold text-[#333333]">
                      {product.rating}
                    </Text>

                    <Text className="ml-[3px] text-[9px] text-[#999999]">
                      ({product.reviews})
                    </Text>

                  </View>

                  {/* NAME */}
                  <Text
                    numberOfLines={1}
                    className="mt-[5px] text-[12px] font-bold text-[#222222]"
                  >
                    {product.name}
                  </Text>

                  {/* LOCATION */}
                  <View className="mt-[4px] flex-row items-center">

                    <MapPin
                      size={10}
                      color="#4D827A"
                      strokeWidth={2}
                    />

                    <Text
                      numberOfLines={1}
                      className="ml-[3px] flex-1 text-[8px] text-[#777777]"
                    >
                      {product.location}
                    </Text>

                  </View>

                  {/* PRICE */}
                  <View className="mt-[8px] flex-row items-end justify-between">

                    <View className="flex-1">

                      <Text className="text-[15px] font-bold text-[#064E46]">
                        {product.price}
                      </Text>

                      <Text className="mt-[1px] text-[8px] text-[#999999] line-through">
                        {product.oldPrice}
                      </Text>

                    </View>

                    {/* ADD */}
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={(event) =>
                        event.stopPropagation()
                      }
                      className="ml-[6px] h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#064E46]"
                    >
                      <Plus
                        size={17}
                        color="#FFFFFF"
                        strokeWidth={2.5}
                      />
                    </TouchableOpacity>

                  </View>

                </View>

              </TouchableOpacity>
            ))}

          </View>

          {/* NO PRODUCTS */}
          {popularProducts.length === 0 && (
            <View className="items-center py-[60px]">

              <Text className="text-[14px] font-semibold text-[#444444]">
                No popular products found
              </Text>

              <Text className="mt-[5px] text-center text-[10px] text-[#888888]">
                Popular products will appear here soon.
              </Text>

            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}