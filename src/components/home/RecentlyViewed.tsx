import { router } from "expo-router";
import { ArrowRight, Clock3, MapPin, Star } from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { products } from "../../data/products";

const recentlyViewedProductIds = [
  "recent-chair",
  "recent-table",
  "recent-sofa",
  "recent-bed",
  "recent-wardrobe",
  "recent-desk",
];

export default function RecentlyViewed() {
  const recentlyViewed = products.filter((product) =>
    recentlyViewedProductIds.includes(product.id),
  );

  return (
    <View className="py-2">
      {/* HEADER */}
      <View className="mb-[12px] flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Clock3 size={16} color="#17665D" strokeWidth={2} />

          <Text className="ml-[6px] text-[17px] font-bold text-[#222222]">
            Recently Viewed
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/recently-viewed")}
          className="flex-row items-center"
        >
          <Text className="text-[11px] font-semibold text-[#17665D]">
            View All
          </Text>

          <ArrowRight
            size={13}
            color="#17665D"
            strokeWidth={2}
            className="ml-[3px]"
          />
        </TouchableOpacity>
      </View>

      {/* PRODUCTS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: 10,
        }}
      >
        {recentlyViewed.map((product) => (
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
            className="mr-[12px] w-[155px] overflow-hidden rounded-[13px] border border-[#ECE8E2] bg-white"
          >
            {/* IMAGE */}
            <Image
              source={{ uri: product.image }}
              resizeMode="cover"
              className="h-[105px] w-full bg-[#F2F0EA]"
            />

            {/* DETAILS */}
            <View className="p-[8px]">
              {/* RATING */}
              <View className="flex-row items-center">
                <Star size={10} color="#946334" fill="#946334" />

                <Text className="ml-[3px] text-[9px] font-semibold text-[#444444]">
                  {product.rating}
                </Text>
              </View>

              {/* NAME */}
              <Text
                numberOfLines={1}
                className="mt-[4px] text-[11px] font-bold text-[#222222]"
              >
                {product.name}
              </Text>

              {/* LOCATION */}
              <View className="mt-[4px] flex-row items-center">
                <MapPin size={9} color="#4D827A" strokeWidth={2} />

                <Text
                  numberOfLines={1}
                  className="ml-[3px] flex-1 text-[8px] text-[#888888]"
                >
                  {product.location}
                </Text>
              </View>

              {/* PRICE */}
              <Text className="mt-[6px] text-[13px] font-bold text-[#064E46]">
                {product.price}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
