import { router, useLocalSearchParams } from "expo-router";
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

export default function CategoryPage() {
  const { category } = useLocalSearchParams();

  const { width } = useWindowDimensions();

  const categoryValue =
    typeof category === "string"
      ? category.toLowerCase()
      : "";

  const categoryName =
    typeof category === "string"
      ? category.charAt(0).toUpperCase() +
        category.slice(1)
      : "Furniture";

  // GET PRODUCTS FROM COMMON DATA
  const filteredProducts = products.filter(
    (product) => product.category === categoryValue
  );

  // RESPONSIVE CARD WIDTH
  const horizontalPadding = 18;
  const cardGap = 12;

  const cardWidth =
    (width - horizontalPadding * 2 - cardGap) / 2;

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "bottom"]}
    >
      {/* HEADER */}
      <View className="border-b border-[#E8E5DF] bg-[#F8F7F4] px-[18px] pb-[14px] pt-[10px]">
        <View className="flex-row items-center">

          {/* BACK BUTTON */}
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
          <View className="ml-[10px] flex-1">
            <Text
              numberOfLines={1}
              className="text-[18px] font-bold text-[#222222]"
            >
              {categoryName}
            </Text>

            <Text className="mt-[1px] text-[9px] text-[#888888]">
              {filteredProducts.length} products available
            </Text>
          </View>

        </View>
      </View>

      {/* CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: horizontalPadding,
          paddingTop: 14,
          paddingBottom: 35,
        }}
      >
        {/* FILTER + SORT */}
        <View className="mb-[15px] flex-row items-center justify-between">

          <TouchableOpacity
            activeOpacity={0.8}
            className="rounded-[9px] border border-[#E3DED6] bg-white px-[13px] py-[8px]"
          >
            <Text className="text-[10px] font-semibold text-[#444444]">
              Filter
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            className="rounded-[9px] border border-[#E3DED6] bg-white px-[13px] py-[8px]"
          >
            <Text className="text-[10px] font-semibold text-[#444444]">
              Sort by
            </Text>
          </TouchableOpacity>

        </View>

        {/* PRODUCT GRID */}
        <View className="flex-row flex-wrap justify-between">

          {filteredProducts.map((product) => (
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
              {/* PRODUCT IMAGE */}
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

              {/* PRODUCT DETAILS */}
              <View className="p-[9px]">

                {/* RATING */}
                <View className="flex-row items-center">

                  <Star
                    size={11}
                    color="#946334"
                    fill="#946334"
                  />

                  <Text className="ml-[3px] text-[10px] font-semibold text-[#444444]">
                    {product.rating}
                  </Text>

                  <Text className="ml-[3px] text-[9px] text-[#999999]">
                    ({product.reviews})
                  </Text>

                </View>

                {/* PRODUCT NAME */}
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

                {/* PRICE + ADD */}
                <View className="mt-[8px] flex-row items-end justify-between">

                  <View className="flex-1">

                    <Text className="text-[15px] font-bold text-[#064E46]">
                      {product.price}
                    </Text>

                    <Text
                      numberOfLines={1}
                      className="mt-[1px] text-[8px] text-[#999999] line-through"
                    >
                      {product.oldPrice}
                    </Text>

                  </View>

                  {/* ADD TO CART */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={(event) =>
                      event.stopPropagation()
                    }
                    className="ml-[6px] h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[8px] bg-[#064E46]"
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

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <View className="items-center px-[20px] py-[60px]">

            <Text className="text-center text-[14px] font-semibold text-[#444444]">
              No products found
            </Text>

            <Text className="mt-[5px] text-center text-[10px] leading-[16px] text-[#888888]">
              Products for this category are not available yet.
            </Text>

          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}