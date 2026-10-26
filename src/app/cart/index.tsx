import CartItem, { type CartProduct } from "@/components/common/CartItem";
import CartSummary from "@/components/common/CartSummary";

import { router } from "expo-router";
import {
    ArrowLeft,
    Heart,
    ShoppingBag,
    ShoppingCart,
} from "lucide-react-native";
import { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const initialCart: CartProduct[] = [
  {
    id: "1",
    name: "Kafni Low Bed",
    category: "Beds",
    price: 54200,
    oldPrice: 66000,
    rating: 4.9,
    quantity: 1,
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
    quantity: 1,
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
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartProduct[]>(initialCart);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const oldTotal = cart.reduce(
    (sum, item) => sum + item.oldPrice * item.quantity,
    0,
  );

  const delivery = subtotal === 0 || subtotal >= 5000 ? 0 : 199;

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const removeItem = (id: string) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const handleCheckout = () => {
    Alert.alert(
      "Checkout",
      "Your cart is ready! We will implement checkout and payment next.",
    );
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "left", "right"]}
    >
      {/* HEADER */}
      <View className="flex-row items-center justify-between border-b border-[#E8E5DF] bg-[#F8F7F4] px-5 py-4">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
            className="h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <ArrowLeft size={21} color="#234B45" />
          </TouchableOpacity>

          <View>
            <Text className="text-xl font-bold text-[#234B45]">My Cart</Text>

            <Text className="mt-0.5 text-xs text-[#777777]">
              {totalQuantity} {totalQuantity === 1 ? "item" : "items"} in your
              bag
            </Text>
          </View>
        </View>

        <View className="h-11 w-11 items-center justify-center rounded-full bg-[#E9F1ED]">
          <ShoppingCart size={21} color="#234B45" />

          {totalQuantity > 0 && (
            <View className="absolute -right-1 -top-1 min-w-[18px] items-center rounded-full bg-[#8B5E34] px-1 py-0.5">
              <Text className="text-[9px] font-bold text-white">
                {totalQuantity}
              </Text>
            </View>
          )}
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 30,
        }}
      >
        {cart.length > 0 ? (
          <>
            {/* DELIVERY BANNER */}
            <View className="mb-5 flex-row items-center rounded-xl bg-[#E9F1ED] p-3">
              <ShoppingBag size={19} color="#234B45" />

              <View className="ml-3 flex-1">
                <Text className="text-xs font-bold text-[#234B45]">
                  Your furniture, your style
                </Text>

                <Text className="mt-1 text-[10px] text-[#57776C]">
                  {subtotal >= 5000
                    ? "Great! Your order qualifies for free delivery."
                    : "Add ₹5,000 worth of items for free delivery."}
                </Text>
              </View>
            </View>

            {/* CART ITEMS HEADING */}
            <View className="mb-4 flex-row items-center justify-between">
              <View>
                <Text className="text-lg font-bold text-[#252925]">
                  Your Items
                </Text>

                <Text className="mt-1 text-xs text-[#777777]">
                  Review your furniture before checkout
                </Text>
              </View>

              <Text className="text-xs font-semibold text-[#234B45]">
                {cart.length} PRODUCTS
              </Text>
            </View>

            {/* CART PRODUCTS */}
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onQuantityChange={updateQuantity}
              />
            ))}

            {/* ORDER SUMMARY */}
            <CartSummary
              subtotal={subtotal}
              oldTotal={oldTotal}
              delivery={delivery}
              onCheckout={handleCheckout}
            />

            {/* CONTINUE SHOPPING */}
            <TouchableOpacity
              onPress={() => router.push("/")}
              activeOpacity={0.7}
              className="mt-5 flex-row items-center justify-center gap-2 py-3"
            >
              <ArrowLeft size={15} color="#234B45" />

              <Text className="text-sm font-semibold text-[#234B45]">
                Continue Shopping
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          /* EMPTY CART */
          <View className="mt-12 items-center rounded-[22px] border border-[#EAE6DF] bg-white px-6 py-10">
            <View className="mb-5 h-20 w-20 items-center justify-center rounded-full bg-[#E9F1ED]">
              <ShoppingCart size={35} color="#234B45" />
            </View>

            <Text className="text-xl font-bold text-[#234B45]">
              Your cart is empty
            </Text>

            <Text className="mt-2 text-center text-sm leading-6 text-[#777777]">
              Looks like you haven't added any furniture yet. Explore our
              collection and find something you love.
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/")}
              activeOpacity={0.8}
              className="mt-6 flex-row items-center gap-2 rounded-xl bg-[#234B45] px-5 py-3.5"
            >
              <ShoppingBag size={17} color="#FFFFFF" />

              <Text className="text-sm font-bold text-white">
                Explore Furniture
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/wishlist")}
              className="mt-4 flex-row items-center gap-2 py-2"
            >
              <Heart size={16} color="#8B5E34" />

              <Text className="text-sm font-semibold text-[#8B5E34]">
                View Wishlist
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
