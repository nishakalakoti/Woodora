import { router } from "expo-router";
import {
    ArrowLeft,
    ChevronRight,
    Package,
    ShoppingBag,
    Truck,
} from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const orders = [
  {
    id: "ORD-1024",
    name: "Kafni Low Bed",
    category: "Bedroom Furniture",
    price: 54200,
    date: "12 Oct 2026",
    status: "Delivered",
    statusColor: "#287A50",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "ORD-1023",
    name: "Saryu Refectory Table",
    category: "Dining Furniture",
    price: 42800,
    date: "14 Oct 2026",
    status: "In Transit",
    statusColor: "#B47A27",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "ORD-1022",
    name: "Modern Comfort Sofa",
    category: "Living Room",
    price: 35900,
    date: "15 Oct 2026",
    status: "Processing",
    statusColor: "#386A91",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
  },
];

export default function MyOrdersPage() {
  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "left", "right"]}
    >
      {/* HEADER */}
      <View className="flex-row items-center border-b border-[#E8E5DF] px-5 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 h-10 w-10 items-center justify-center rounded-full border border-[#E8E5DF] bg-white"
        >
          <ArrowLeft size={20} color="#234B45" />
        </TouchableOpacity>

        <View className="flex-1">
          <Text className="text-xl font-bold text-[#234B45]">My Orders</Text>
          <Text className="mt-1 text-xs text-[#777777]">
            Track and manage your orders
          </Text>
        </View>

        <View className="h-10 w-10 items-center justify-center rounded-full bg-[#E9F1ED]">
          <Package size={21} color="#234B45" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 30,
        }}
      >
        {/* ORDER SUMMARY */}
        <View className="mb-5 rounded-[20px] bg-[#234B45] p-5">
          <Text className="text-xs font-medium text-[#D7E2DC]">
            YOUR PURCHASES
          </Text>

          <View className="mt-3 flex-row items-center justify-between">
            <View>
              <Text className="text-3xl font-bold text-white">
                {orders.length}
              </Text>
              <Text className="mt-1 text-xs text-[#D7E2DC]">Total Orders</Text>
            </View>

            <View className="h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <ShoppingBag size={28} color="#E0C39B" />
            </View>
          </View>

          <View className="mt-4 border-t border-white/15 pt-3">
            <Text className="text-xs text-[#D7E2DC]">
              Your furniture journey, all in one place.
            </Text>
          </View>
        </View>

        {/* SECTION TITLE */}
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-lg font-bold text-[#252925]">
            Recent Orders
          </Text>

          <Text className="text-xs text-[#777777]">{orders.length} orders</Text>
        </View>

        {/* ORDER CARDS */}
        {orders.map((order) => (
          <View
            key={order.id}
            className="mb-4 overflow-hidden rounded-[20px] border border-[#EAE6DF] bg-white"
          >
            {/* ORDER ID AND STATUS */}
            <View className="flex-row items-center justify-between border-b border-[#F0EDE7] px-4 py-3">
              <View>
                <Text className="text-[10px] text-[#888888]">ORDER ID</Text>
                <Text className="mt-1 text-xs font-bold text-[#303530]">
                  {order.id}
                </Text>
              </View>

              <View
                className="flex-row items-center rounded-full px-2.5 py-1.5"
                style={{ backgroundColor: `${order.statusColor}15` }}
              >
                <View
                  className="mr-1.5 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: order.statusColor }}
                />
                <Text
                  className="text-[10px] font-bold"
                  style={{ color: order.statusColor }}
                >
                  {order.status}
                </Text>
              </View>
            </View>

            {/* PRODUCT DETAILS */}
            <View className="flex-row p-3">
              <Image
                source={{ uri: order.image }}
                resizeMode="cover"
                className="h-[112px] w-[100px] rounded-xl bg-[#F0EDE7]"
              />

              <View className="ml-3 flex-1 justify-center">
                <Text className="text-[10px] font-medium text-[#9A7651]">
                  {order.category}
                </Text>

                <Text
                  numberOfLines={2}
                  className="mt-1 text-sm font-bold text-[#252925]"
                >
                  {order.name}
                </Text>

                <Text className="mt-2 text-[10px] text-[#888888]">
                  Ordered on {order.date}
                </Text>

                <Text className="mt-2 text-base font-bold text-[#234B45]">
                  ₹{order.price.toLocaleString("en-IN")}
                </Text>
              </View>
            </View>

            {/* ACTION */}
            <View className="flex-row items-center justify-between border-t border-[#F0EDE7] px-3 py-3">
              <View className="flex-row items-center">
                <Truck size={15} color="#777777" />
                <Text className="ml-1.5 text-[10px] text-[#777777]">
                  {order.status === "Delivered"
                    ? "Successfully delivered"
                    : order.status === "In Transit"
                      ? "On the way to you"
                      : "Preparing your order"}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  alert(`Order details for ${order.id} will be available soon.`)
                }
                className="flex-row items-center"
              >
                <Text className="text-xs font-bold text-[#17665D]">
                  View Details
                </Text>
                <ChevronRight size={15} color="#17665D" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* CONTINUE SHOPPING */}
        <TouchableOpacity
          onPress={() => router.push("/")}
          activeOpacity={0.8}
          className="mt-1 flex-row items-center justify-center rounded-xl bg-[#234B45] py-4"
        >
          <ShoppingBag size={17} color="#FFFFFF" />
          <Text className="ml-2 text-sm font-bold text-white">
            Continue Shopping
          </Text>
        </TouchableOpacity>

        <Text className="mt-4 text-center text-[10px] text-[#999999]">
          Order information shown here is sample data.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
