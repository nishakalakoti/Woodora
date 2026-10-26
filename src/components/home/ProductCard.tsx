import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

type Product = {
  id: number;
  name: string;
  price: string;
  location: string;
  icon: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const handleProductPress = () => {
    router.push({
      pathname: "/product/[id]",
      params: {
        id: product.id.toString(),
      },
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handleProductPress}
      className="mb-[15px] w-[48%] rounded-[16px] bg-surface p-[10px]"
    >
      {/* PRODUCT IMAGE */}
      <View className="relative h-[145px] items-center justify-center rounded-[13px] bg-imageBg">
        <Text className="text-[60px]">
          {product.icon}
        </Text>

        {/* WISHLIST */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="absolute right-2 top-2 h-[30px] w-[30px] items-center justify-center rounded-full bg-surface"
          onPress={(event) => {
            event.stopPropagation();
          }}
        >
          <Text className="text-[18px] text-[#777777]">
            ♡
          </Text>
        </TouchableOpacity>
      </View>

      {/* PRODUCT NAME */}
      <Text
        numberOfLines={1}
        className="mt-[10px] text-[13px] font-bold text-text"
      >
        {product.name}
      </Text>

      {/* LOCATION */}
      <Text
        numberOfLines={1}
        className="mt-[5px] text-[10px] text-muted"
      >
        📍 {product.location}
      </Text>

      {/* PRICE + CART */}
      <View className="mt-[10px] flex-row items-center justify-between">

        <Text className="text-[15px] font-bold text-primary">
          {product.price}
        </Text>

        {/* ADD TO CART */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="h-[30px] w-[30px] items-center justify-center rounded-[10px] bg-primary"
          onPress={(event) => {
            event.stopPropagation();
          }}
        >
          <Text className="text-[20px] leading-[21px] text-white">
            +
          </Text>
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
  );
}