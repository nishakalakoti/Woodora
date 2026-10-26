import { router, useLocalSearchParams } from "expo-router";
import {
    ArrowLeft,
    Check,
    CreditCard,
    MapPin,
    Minus,
    Package,
    Plus,
    ShieldCheck,
    ShoppingBag,
    Truck,
} from "lucide-react-native";
import { useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { products } from "../../data/products";

export default function BuyNowPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = products.find((item) => item.id === String(id));

  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  if (!product) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-[#F8F7F4]">
        <Package size={44} color="#234B45" />

        <Text className="mt-4 text-lg font-bold text-[#234B45]">
          Product Not Found
        </Text>

        <Text className="mt-2 text-sm text-[#777777]">
          Please select a product again.
        </Text>

        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-5 rounded-xl bg-[#234B45] px-6 py-3"
        >
          <Text className="font-bold text-white">Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const price = Number(String(product.price).replace(/[^0-9.]/g, ""));

  const oldPrice = Number(String(product.oldPrice).replace(/[^0-9.]/g, ""));

  const subtotal = price * quantity;
  const deliveryCharge = subtotal >= 50000 ? 0 : 499;
  const total = subtotal + deliveryCharge;

  const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

  const handlePlaceOrder = () => {
    if (
      !fullName.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !city.trim() ||
      !pincode.trim()
    ) {
      Alert.alert(
        "Missing Details",
        "Please fill in all delivery address fields.",
      );
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      Alert.alert(
        "Invalid Mobile Number",
        "Please enter a valid 10-digit Indian mobile number.",
      );
      return;
    }

    if (!/^\d{6}$/.test(pincode.trim())) {
      Alert.alert("Invalid PIN Code", "Please enter a valid 6-digit PIN code.");
      return;
    }

    Alert.alert(
      "Checkout Ready",
      `Product: ${product.name}\nQuantity: ${quantity}\nTotal: ${formatPrice(total)}\n\nOrder placement and payment will be connected next.`,
    );
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "left", "right"]}
    >
      {/* HEADER */}
      <View className="flex-row items-center border-b border-[#E8E5DF] px-4 py-3">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-white"
        >
          <ArrowLeft size={21} color="#234B45" />
        </TouchableOpacity>

        <View className="flex-1">
          <Text className="text-lg font-bold text-[#234B45]">Buy Now</Text>

          <Text className="text-[11px] text-[#777777]">Review your order</Text>
        </View>

        <View className="h-10 w-10 items-center justify-center rounded-full bg-[#E9F1ED]">
          <ShieldCheck size={21} color="#234B45" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 18,
          paddingBottom: 28,
        }}
      >
        {/* DELIVERY PROGRESS */}
        <View className="mb-5 flex-row items-center rounded-2xl border border-[#E5E9E1] bg-white p-4">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-[#E9F1ED]">
            <Truck size={21} color="#234B45" />
          </View>

          <View className="ml-3 flex-1">
            <Text className="text-sm font-bold text-[#252925]">
              Secure Checkout
            </Text>

            <Text className="mt-1 text-[11px] text-[#777777]">
              Confirm your product and delivery details.
            </Text>
          </View>

          <ShieldCheck size={20} color="#34805B" />
        </View>

        {/* PRODUCT CARD */}
        <View className="mb-5">
          <Text className="mb-3 text-[17px] font-bold text-[#252925]">
            Order Summary
          </Text>

          <View className="rounded-[20px] border border-[#EAE6DF] bg-white p-3">
            <View className="flex-row">
              <Image
                source={{ uri: product.image }}
                resizeMode="cover"
                className="h-[125px] w-[112px] rounded-xl bg-[#F0EDE7]"
              />

              <View className="ml-3 flex-1 justify-between py-1">
                <View>
                  <Text className="text-[10px] font-semibold uppercase tracking-widest text-[#9A7651]">
                    {product.category}
                  </Text>

                  <Text
                    numberOfLines={2}
                    className="mt-1 text-[15px] font-bold text-[#252925]"
                  >
                    {product.name}
                  </Text>

                  <Text className="mt-1 text-[11px] text-[#777777]">
                    {product.stock} in stock
                  </Text>

                  <View className="mt-2 flex-row flex-wrap items-center gap-2">
                    <Text className="text-base font-bold text-[#234B45]">
                      {product.price}
                    </Text>

                    <Text className="text-[11px] text-[#999999] line-through">
                      {product.oldPrice}
                    </Text>
                  </View>
                </View>

                <View className="mt-3 flex-row items-center">
                  <TouchableOpacity
                    disabled={quantity <= 1}
                    onPress={() =>
                      setQuantity((current) => Math.max(1, current - 1))
                    }
                    className="h-8 w-8 items-center justify-center rounded-lg border border-[#E8E5DF]"
                  >
                    <Minus size={14} color="#234B45" />
                  </TouchableOpacity>

                  <Text className="mx-4 text-sm font-bold text-[#252925]">
                    {quantity}
                  </Text>

                  <TouchableOpacity
                    disabled={quantity >= Number(product.stock)}
                    onPress={() =>
                      setQuantity((current) =>
                        Math.min(Number(product.stock), current + 1),
                      )
                    }
                    className="h-8 w-8 items-center justify-center rounded-lg border border-[#E8E5DF]"
                  >
                    <Plus size={14} color="#234B45" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* DELIVERY ADDRESS */}
        <View className="mb-5 rounded-[20px] border border-[#EAE6DF] bg-white p-4">
          <View className="mb-4 flex-row items-center">
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#E9F1ED]">
              <MapPin size={20} color="#234B45" />
            </View>

            <View className="ml-3">
              <Text className="text-base font-bold text-[#252925]">
                Delivery Address
              </Text>

              <Text className="mt-1 text-[11px] text-[#777777]">
                Where should we deliver your furniture?
              </Text>
            </View>
          </View>

          <Text className="mb-1.5 text-xs font-semibold text-[#444444]">
            Full Name
          </Text>

          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your full name"
            className="mb-3 rounded-xl border border-[#E8E5DF] bg-[#FCFBF9] px-3 py-3 text-sm text-[#252925]"
            placeholderTextColor="#999999"
          />

          <Text className="mb-1.5 text-xs font-semibold text-[#444444]">
            Mobile Number
          </Text>

          <TextInput
            value={phone}
            onChangeText={(value) =>
              setPhone(value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="10-digit mobile number"
            keyboardType="phone-pad"
            maxLength={10}
            className="mb-3 rounded-xl border border-[#E8E5DF] bg-[#FCFBF9] px-3 py-3 text-sm text-[#252925]"
            placeholderTextColor="#999999"
          />

          <Text className="mb-1.5 text-xs font-semibold text-[#444444]">
            House No. / Street / Area
          </Text>

          <TextInput
            value={address}
            onChangeText={setAddress}
            placeholder="Enter your complete address"
            multiline
            textAlignVertical="top"
            className="mb-3 min-h-[85px] rounded-xl border border-[#E8E5DF] bg-[#FCFBF9] px-3 py-3 text-sm text-[#252925]"
            placeholderTextColor="#999999"
          />

          <View className="flex-row gap-3">
            <View className="flex-1">
              <Text className="mb-1.5 text-xs font-semibold text-[#444444]">
                City
              </Text>

              <TextInput
                value={city}
                onChangeText={setCity}
                placeholder="City"
                className="rounded-xl border border-[#E8E5DF] bg-[#FCFBF9] px-3 py-3 text-sm text-[#252925]"
                placeholderTextColor="#999999"
              />
            </View>

            <View className="flex-1">
              <Text className="mb-1.5 text-xs font-semibold text-[#444444]">
                PIN Code
              </Text>

              <TextInput
                value={pincode}
                onChangeText={(value) =>
                  setPincode(value.replace(/\D/g, "").slice(0, 6))
                }
                placeholder="6-digit PIN"
                keyboardType="number-pad"
                maxLength={6}
                className="rounded-xl border border-[#E8E5DF] bg-[#FCFBF9] px-3 py-3 text-sm text-[#252925]"
                placeholderTextColor="#999999"
              />
            </View>
          </View>
        </View>

        {/* PAYMENT METHOD */}
        <View className="mb-5 rounded-[20px] border border-[#EAE6DF] bg-white p-4">
          <Text className="mb-3 text-base font-bold text-[#252925]">
            Payment Method
          </Text>

          <TouchableOpacity
            onPress={() => setPaymentMethod("cod")}
            className={`mb-3 flex-row items-center rounded-xl border p-3 ${
              paymentMethod === "cod"
                ? "border-[#234B45] bg-[#F0F6F1]"
                : "border-[#E8E5DF] bg-white"
            }`}
          >
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#E9F1ED]">
              <ShoppingBag size={20} color="#234B45" />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-sm font-bold text-[#252925]">
                Cash on Delivery
              </Text>

              <Text className="mt-1 text-[11px] text-[#777777]">
                Pay when your order arrives
              </Text>
            </View>

            <View
              className={`h-5 w-5 items-center justify-center rounded-full border ${
                paymentMethod === "cod"
                  ? "border-[#234B45] bg-[#234B45]"
                  : "border-[#BBBBBB]"
              }`}
            >
              {paymentMethod === "cod" && <Check size={12} color="#FFFFFF" />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setPaymentMethod("online")}
            className={`flex-row items-center rounded-xl border p-3 ${
              paymentMethod === "online"
                ? "border-[#234B45] bg-[#F0F6F1]"
                : "border-[#E8E5DF] bg-white"
            }`}
          >
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#F1E9DD]">
              <CreditCard size={20} color="#8B5E34" />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-sm font-bold text-[#252925]">
                Online Payment
              </Text>

              <Text className="mt-1 text-[11px] text-[#777777]">
                UPI, card or net banking
              </Text>
            </View>

            <View
              className={`h-5 w-5 items-center justify-center rounded-full border ${
                paymentMethod === "online"
                  ? "border-[#234B45] bg-[#234B45]"
                  : "border-[#BBBBBB]"
              }`}
            >
              {paymentMethod === "online" && (
                <Check size={12} color="#FFFFFF" />
              )}
            </View>
          </TouchableOpacity>
        </View>

        {/* PRICE DETAILS */}
        <View className="mb-5 rounded-[20px] border border-[#EAE6DF] bg-white p-4">
          <Text className="mb-4 text-base font-bold text-[#252925]">
            Price Details
          </Text>

          <View className="mb-3 flex-row justify-between">
            <Text className="text-xs text-[#777777]">
              Price ({quantity} {quantity === 1 ? "item" : "items"})
            </Text>

            <Text className="text-xs font-semibold text-[#252925]">
              {formatPrice(subtotal)}
            </Text>
          </View>

          {oldPrice > price && (
            <View className="mb-3 flex-row justify-between">
              <Text className="text-xs text-[#777777]">You save</Text>

              <Text className="text-xs font-semibold text-[#34805B]">
                -{formatPrice((oldPrice - price) * quantity)}
              </Text>
            </View>
          )}

          <View className="mb-3 flex-row justify-between">
            <Text className="text-xs text-[#777777]">Delivery Charges</Text>

            <Text
              className={`text-xs font-semibold ${
                deliveryCharge === 0 ? "text-[#34805B]" : "text-[#252925]"
              }`}
            >
              {deliveryCharge === 0 ? "FREE" : formatPrice(deliveryCharge)}
            </Text>
          </View>

          <View className="mb-3 border-t border-dashed border-[#E8E5DF]" />

          <View className="flex-row items-center justify-between">
            <Text className="text-sm font-bold text-[#252925]">
              Total Amount
            </Text>

            <Text className="text-xl font-bold text-[#234B45]">
              {formatPrice(total)}
            </Text>
          </View>

          <Text className="mt-2 text-[10px] text-[#777777]">
            Final charges may vary based on delivery location.
          </Text>
        </View>

        {/* PLACE ORDER */}
        <TouchableOpacity
          onPress={handlePlaceOrder}
          activeOpacity={0.85}
          className="flex-row items-center justify-center gap-2 rounded-2xl bg-[#064E46] py-4"
        >
          <ShieldCheck size={19} color="#FFFFFF" />

          <Text className="text-sm font-bold text-white">
            Place Order · {formatPrice(total)}
          </Text>
        </TouchableOpacity>

        <Text className="mt-3 text-center text-[10px] leading-4 text-[#888888]">
          Your delivery details will be used to process your order.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
