import { router } from "expo-router";
import { Heart, MapPin, Plus, Star } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { products } from "../../data/products";

const popularProductIds = [
  "popular-bed-kafni",
  "popular-table-saryu",
  "popular-mandir-bagnath",
  "popular-chair-trishul",
];

export default function PopularFurniture() {
  const popularProducts = products.filter((product) =>
    popularProductIds.includes(product.id),
  );

  return (
    <View className="mt-8 pb-4">
      {/* HEADER */}
      <View className="mb-[12px] flex-row items-center justify-between">
        <Text className="text-[17px] font-bold text-[#222222]">
          Popular Furniture
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/popular")}
          className="flex-row items-center"
        >
          <Text className="text-[11px] font-semibold text-[#17665D]">
            View All
          </Text>

          <Text className="ml-[3px] text-[15px] text-[#17665D]">›</Text>
        </TouchableOpacity>
      </View>

      {/* PRODUCT GRID */}
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
            className="mb-[13px] w-[48.3%] overflow-hidden rounded-[14px] border border-[#ECE8E2] bg-white"
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
                onPress={(event) => event.stopPropagation()}
                className="absolute right-[7px] top-[7px] h-[28px] w-[28px] items-center justify-center rounded-full bg-white"
              >
                <Heart size={16} color="#777777" strokeWidth={1.8} />
              </TouchableOpacity>
            </View>

            {/* DETAILS */}
            <View className="p-[9px]">
              {/* RATING */}
              <View className="flex-row items-center">
                <Star size={11} color="#946334" fill="#946334" />

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
                <MapPin size={10} color="#4D827A" strokeWidth={2} />

                <Text
                  numberOfLines={1}
                  className="ml-[3px] flex-1 text-[8px] text-[#777777]"
                >
                  {product.location}
                </Text>

                <Text className="ml-[3px] text-[8px] font-medium text-[#17665D]">
                  • In Stock
                </Text>
              </View>

              {/* PRICE + CART */}
              <View className="mt-[8px] flex-row items-end justify-between">
                <View>
                  <Text className="text-[15px] font-bold text-[#064E46]">
                    {product.price}
                  </Text>

                  <Text className="mt-[1px] text-[8px] text-[#999999] line-through">
                    {product.oldPrice}
                  </Text>
                </View>

                {/* ADD TO CART */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={(event) => event.stopPropagation()}
                  className="h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#064E46]"
                >
                  <Plus size={17} color="#FFFFFF" strokeWidth={2.5} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
