import { router, useLocalSearchParams } from "expo-router";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Minus,
  Plus,
  ShoppingCart,
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

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  const { width } = useWindowDimensions();

  const product = products.find((item) => item.id === String(id));

  // RESPONSIVE IMAGE HEIGHT
  const imageHeight = Math.min(width * 0.85, 330);

  // PRODUCT NOT AVAILABLE
  if (!product) {
    return (
      <SafeAreaView className="flex-1 bg-[#F8F7F4]" edges={["top", "bottom"]}>
        <View className="flex-1 items-center justify-center px-[20px]">
          <Text className="text-[17px] font-bold text-[#222222]">
            Product Not Available
          </Text>

          <Text className="mt-[6px] text-center text-[11px] leading-[17px] text-[#777777]">
            This product is currently unavailable or does not exist.
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.back()}
            className="mt-[14px] rounded-[9px] bg-[#064E46] px-[18px] py-[10px]"
          >
            <Text className="text-[11px] font-bold text-white">Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F8F7F4]" edges={["top", "bottom"]}>
      <View className="flex-1 bg-[#F8F7F4]">
        {/* TOP HEADER */}
        <View className="absolute left-0 right-0 top-0 z-20 flex-row items-center justify-between px-[16px] pt-[10px]">
          {/* BACK */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.back()}
            className="h-[38px] w-[38px] items-center justify-center rounded-full bg-white"
          >
            <ArrowLeft size={20} color="#234B45" strokeWidth={2} />
          </TouchableOpacity>

          {/* WISHLIST */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-[38px] w-[38px] items-center justify-center rounded-full bg-white"
          >
            <Heart size={19} color="#777777" strokeWidth={1.8} />
          </TouchableOpacity>
        </View>

        {/* MAIN CONTENT */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 115,
          }}
        >
          {/* PRODUCT IMAGE */}
          <View
            style={{
              height: imageHeight,
            }}
            className="relative bg-[#F0EDE7]"
          >
            <Image
              source={{ uri: product.image }}
              resizeMode="cover"
              className="h-full w-full"
            />

            {/* DISCOUNT */}
            <View className="absolute bottom-[14px] left-[16px] rounded-[6px] bg-[#946334] px-[8px] py-[5px]">
              <Text className="text-[9px] font-bold text-white">
                {product.discount}
              </Text>
            </View>
          </View>

          {/* PRODUCT CONTENT */}
          <View className="rounded-t-[22px] bg-[#F8F7F4] px-[18px] pt-[18px]">
            {/* RATING */}
            <View className="flex-row items-center">
              <Star size={14} color="#946334" fill="#946334" />

              <Text className="ml-[4px] text-[11px] font-bold text-[#333333]">
                {product.rating}
              </Text>

              <Text className="ml-[4px] text-[10px] text-[#888888]">
                ({product.reviews} reviews)
              </Text>
            </View>

            {/* PRODUCT NAME */}
            <Text
              numberOfLines={2}
              className="mt-[7px] text-[22px] font-bold leading-[28px] text-[#222222]"
            >
              {product.name}
            </Text>

            {/* LOCATION + STOCK */}
            <View className="mt-[7px] flex-row items-center">
              <MapPin size={13} color="#4D827A" strokeWidth={2} />

              <Text
                numberOfLines={1}
                className="ml-[4px] flex-1 text-[10px] text-[#777777]"
              >
                {product.location}
              </Text>

              <Text className="mx-[5px] text-[10px] text-[#AAAAAA]">•</Text>

              <Text className="text-[10px] font-semibold text-[#17665D]">
                {product.stock} in stock
              </Text>
            </View>

            {/* PRICE */}
            <View className="mt-[14px] flex-row items-end">
              <Text className="text-[24px] font-bold text-[#064E46]">
                {product.price}
              </Text>

              <Text className="mb-[2px] ml-[8px] text-[11px] text-[#999999] line-through">
                {product.oldPrice}
              </Text>
            </View>

            {/* DESCRIPTION */}
            <View className="mt-[20px]">
              <Text className="text-[15px] font-bold text-[#222222]">
                About this product
              </Text>

              <Text className="mt-[7px] text-[11px] leading-[18px] text-[#777777]">
                {product.description}
              </Text>
            </View>

            {/* PRODUCT DETAILS */}
            <View className="mt-[20px]">
              <Text className="text-[15px] font-bold text-[#222222]">
                Product Details
              </Text>

              <View className="mt-[10px] overflow-hidden rounded-[12px] border border-[#E8E5DF] bg-white">
                {/* MATERIAL */}
                <View className="flex-row border-b border-[#EEEAE4] px-[12px] py-[10px]">
                  <Text className="w-[40%] text-[10px] text-[#888888]">
                    Material
                  </Text>

                  <Text className="flex-1 text-[10px] font-semibold text-[#333333]">
                    {product.material}
                  </Text>
                </View>

                {/* COLOR */}
                <View className="flex-row border-b border-[#EEEAE4] px-[12px] py-[10px]">
                  <Text className="w-[40%] text-[10px] text-[#888888]">
                    Color
                  </Text>

                  <Text className="flex-1 text-[10px] font-semibold text-[#333333]">
                    {product.color}
                  </Text>
                </View>

                {/* DIMENSIONS */}
                <View className="flex-row border-b border-[#EEEAE4] px-[12px] py-[10px]">
                  <Text className="w-[40%] text-[10px] text-[#888888]">
                    Dimensions
                  </Text>

                  <Text className="flex-1 text-[10px] font-semibold text-[#333333]">
                    {product.dimensions}
                  </Text>
                </View>

                {/* WARRANTY */}
                <View className="flex-row px-[12px] py-[10px]">
                  <Text className="w-[40%] text-[10px] text-[#888888]">
                    Warranty
                  </Text>

                  <Text className="flex-1 text-[10px] font-semibold text-[#333333]">
                    {product.warranty}
                  </Text>
                </View>
              </View>
            </View>

            {/* SELLER */}
            <View className="mt-[20px]">
              <Text className="text-[15px] font-bold text-[#222222]">
                Sold by
              </Text>

              <View className="mt-[9px] flex-row items-center rounded-[12px] border border-[#E8E5DF] bg-white p-[12px]">
                <View className="h-[38px] w-[38px] items-center justify-center rounded-full bg-[#E5F0ED]">
                  <ShoppingCart size={18} color="#17665D" strokeWidth={1.8} />
                </View>

                <View className="ml-[9px] flex-1">
                  <Text
                    numberOfLines={1}
                    className="text-[11px] font-bold text-[#333333]"
                  >
                    {product.seller}
                  </Text>

                  <Text className="mt-[2px] text-[9px] text-[#888888]">
                    Verified furniture seller
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* BOTTOM ACTION BAR */}
        <View className="absolute bottom-0 left-0 right-0 border-t border-[#E8E5DF] bg-white px-[12px] pb-[10px] pt-[10px]">
          <View className="flex-row items-center">
            {/* QUANTITY */}
            <View className="mr-[8px] h-[44px] flex-row items-center rounded-[10px] border border-[#E0DDD7]">
              <TouchableOpacity
                activeOpacity={0.7}
                className="h-[42px] w-[30px] items-center justify-center"
              >
                <Minus size={14} color="#555555" />
              </TouchableOpacity>

              <Text className="text-[12px] font-bold text-[#333333]">1</Text>

              <TouchableOpacity
                activeOpacity={0.7}
                className="h-[42px] w-[30px] items-center justify-center"
              >
                <Plus size={14} color="#555555" />
              </TouchableOpacity>
            </View>

            {/* ADD TO CART */}
            <TouchableOpacity
              activeOpacity={0.8}
              className="mr-[7px] h-[44px] flex-1 flex-row items-center justify-center rounded-[10px] border border-[#064E46]"
            >
              <ShoppingCart size={16} color="#064E46" strokeWidth={2} />

              <Text className="ml-[5px] text-[10px] font-bold text-[#064E46]">
                Add to Cart
              </Text>
            </TouchableOpacity>

            {/* BUY NOW */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                router.push({
                  pathname: "/buy-now",
                  params: { id: String(product.id) },
                })
              }
              className="h-[44px] flex-1 items-center justify-center rounded-[10px] bg-[#064E46]"
            >
              <Text className="text-[10px] font-bold text-white">Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
