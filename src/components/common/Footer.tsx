import { router, usePathname } from "expo-router";
import {
  Heart,
  Home,
  LayoutGrid,
  ShoppingCart,
  User,
} from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

const navigationItems = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Categories",
    icon: LayoutGrid,
  },
  {
    name: "Wishlist",
    icon: Heart,
    badge: 4,
  },
  {
    name: "Cart",
    icon: ShoppingCart,
    badge: 3,
  },
  {
    name: "Profile",
    icon: User,
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <View className="border-t border-[#E8E5DF] bg-white px-2 pb-2 pt-2">
      <View className="flex-row items-end justify-between">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.name === "Home"
              ? pathname === "/"
              : item.name === "Categories"
                ? pathname === "/category" || pathname.startsWith("/category/")
                : item.name === "Wishlist"
                  ? pathname === "/wishlist"
                  : item.name === "Cart"
                    ? pathname === "/cart"
                    : item.name === "Profile"
                      ? pathname === "/profile"
                      : false;

          return (
            <TouchableOpacity
              key={item.name}
              activeOpacity={0.7}
              onPress={() => {
                if (item.name === "Home") {
                  router.push("/");
                } else if (item.name === "Categories") {
                  router.push("/category");
                } else if (item.name === "Wishlist") {
                  router.push("/wishlist");
                } else if (item.name === "Cart") {
                  router.push("/cart");
                } else if (item.name === "Profile") {
                  router.push("/profile");
                }
              }}
              className="relative min-w-[58px] items-center"
            >
              <View
                className={`h-[34px] w-[52px] items-center justify-center rounded-full ${
                  isActive ? "bg-[#234B45]" : "bg-transparent"
                }`}
              >
                <Icon
                  size={19}
                  strokeWidth={isActive ? 2.5 : 1.8}
                  color={isActive ? "#FFFFFF" : "#6F746F"}
                />

                {item.badge && (
                  <View className="absolute -right-[2px] -top-[5px] h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#8B5E34] px-1">
                    <Text className="text-[9px] font-bold text-white">
                      {item.badge}
                    </Text>
                  </View>
                )}
              </View>

              <Text
                className={`mt-[3px] text-[10px] ${
                  isActive
                    ? "font-bold text-[#234B45]"
                    : "font-medium text-[#777]"
                }`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
