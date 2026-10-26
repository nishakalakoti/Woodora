import { router } from "expo-router";
import {
    ArrowLeft,
    Bell,
    Check,
    CheckCheck,
    Heart,
    Package,
    Tag,
    Trash2,
    Truck,
} from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "order" | "delivery" | "offer" | "wishlist";
  read: boolean;
};

const initialNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "Order Confirmed!",
    message: "Your Kafni Low Bed order has been confirmed successfully.",
    time: "10 min ago",
    type: "order",
    read: false,
  },
  {
    id: "2",
    title: "Special Offer for You",
    message: "Enjoy exclusive discounts on selected furniture this week.",
    time: "1 hour ago",
    type: "offer",
    read: false,
  },
  {
    id: "3",
    title: "Your Order Is on Its Way",
    message: "Your furniture order has been shipped. Stay tuned for delivery.",
    time: "Yesterday",
    type: "delivery",
    read: true,
  },
  {
    id: "4",
    title: "Wishlist Reminder",
    message: "Your favorite furniture is waiting for you. Explore it again!",
    time: "Yesterday",
    type: "wishlist",
    read: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<NotificationItem[]>(initialNotifications);

  const unreadCount = notifications.filter((item) => !item.read).length;

  const markAsRead = (id: string) => {
    setNotifications((current) =>
      current.map((item) => (item.id === id ? { ...item, read: true } : item)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((item) => ({ ...item, read: true })),
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getIcon = (type: NotificationItem["type"]) => {
    switch (type) {
      case "order":
        return Package;
      case "delivery":
        return Truck;
      case "offer":
        return Tag;
      case "wishlist":
        return Heart;
    }
  };

  const getIconColor = (type: NotificationItem["type"]) => {
    switch (type) {
      case "order":
        return "#234B45";
      case "delivery":
        return "#3975A5";
      case "offer":
        return "#A36B2D";
      case "wishlist":
        return "#B84C69";
    }
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "left", "right"]}
    >
      {/* HEADER */}
      <View className="flex-row items-center justify-between border-b border-[#E8E5DF] px-4 py-4">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <ArrowLeft size={21} color="#234B45" />
          </TouchableOpacity>

          <View>
            <Text className="text-xl font-bold text-[#234B45]">
              Notifications
            </Text>
            <Text className="mt-0.5 text-xs text-[#777777]">
              Stay updated with your furniture
            </Text>
          </View>
        </View>

        <View className="h-11 w-11 items-center justify-center rounded-full bg-[#E9F1ED]">
          <Bell size={21} color="#234B45" />

          {unreadCount > 0 && (
            <View className="absolute right-0 top-0 h-4 min-w-4 items-center justify-center rounded-full bg-[#8B5E34] px-1">
              <Text className="text-[9px] font-bold text-white">
                {unreadCount}
              </Text>
            </View>
          )}
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 20,
          paddingBottom: 30,
        }}
      >
        {/* SUMMARY */}
        <View className="mb-5 rounded-[20px] bg-[#234B45] p-5">
          <Text className="text-[10px] font-semibold uppercase tracking-[2px] text-[#D9C19E]">
            YOUR UPDATES
          </Text>

          <Text className="mt-2 text-[24px] font-bold text-white">
            You’re all caught up?
          </Text>

          <Text className="mt-2 text-xs leading-5 text-[#D7E2DC]">
            You have {unreadCount} unread{" "}
            {unreadCount === 1 ? "notification" : "notifications"}.
          </Text>

          <View className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/20">
            <View
              className="h-full rounded-full bg-[#D9C19E]"
              style={{
                width: `${
                  notifications.length > 0
                    ? ((notifications.length - unreadCount) /
                        notifications.length) *
                      100
                    : 100
                }%`,
              }}
            />
          </View>
        </View>

        {/* ACTIONS */}
        <View className="mb-4 flex-row items-center justify-between">
          <View>
            <Text className="text-lg font-bold text-[#252925]">
              Recent Activity
            </Text>
            <Text className="mt-1 text-xs text-[#777777]">
              {notifications.length} notifications
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              onPress={markAllAsRead}
              disabled={unreadCount === 0}
              className="flex-row items-center gap-1"
            >
              <CheckCheck
                size={15}
                color={unreadCount === 0 ? "#A1A19B" : "#234B45"}
              />
              <Text
                className={`text-[10px] font-semibold ${
                  unreadCount === 0 ? "text-[#A1A19B]" : "text-[#234B45]"
                }`}
              >
                Read all
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={clearAll}
              disabled={notifications.length === 0}
            >
              <Trash2
                size={17}
                color={notifications.length === 0 ? "#A1A19B" : "#B84C3B"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* NOTIFICATION LIST */}
        {notifications.length > 0 ? (
          notifications.map((item) => {
            const Icon = getIcon(item.type);
            const iconColor = getIconColor(item.type);

            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                onPress={() => markAsRead(item.id)}
                className={`mb-3 flex-row rounded-[18px] border p-4 ${
                  item.read
                    ? "border-[#EAE6DF] bg-white"
                    : "border-[#D7E5DC] bg-[#F0F6F1]"
                }`}
              >
                <View
                  className="h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: `${iconColor}15`,
                  }}
                >
                  <Icon size={21} color={iconColor} />
                </View>

                <View className="ml-3 flex-1">
                  <View className="flex-row items-start justify-between">
                    <Text className="flex-1 pr-2 text-sm font-bold text-[#252925]">
                      {item.title}
                    </Text>

                    {!item.read && (
                      <View className="mt-1 h-2 w-2 rounded-full bg-[#34805B]" />
                    )}
                  </View>

                  <Text className="mt-1 text-xs leading-5 text-[#777777]">
                    {item.message}
                  </Text>

                  <View className="mt-3 flex-row items-center justify-between">
                    <Text className="text-[10px] text-[#999999]">
                      {item.time}
                    </Text>

                    {!item.read ? (
                      <View className="flex-row items-center gap-1">
                        <Check size={12} color="#234B45" />
                        <Text className="text-[10px] font-semibold text-[#234B45]">
                          Tap to read
                        </Text>
                      </View>
                    ) : (
                      <Text className="text-[10px] text-[#999999]">Read</Text>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <View className="mt-10 items-center rounded-[20px] border border-[#EAE6DF] bg-white px-6 py-10">
            <View className="mb-4 h-20 w-20 items-center justify-center rounded-full bg-[#E9F1ED]">
              <Bell size={34} color="#234B45" />
            </View>

            <Text className="text-lg font-bold text-[#234B45]">
              All caught up!
            </Text>

            <Text className="mt-2 text-center text-sm leading-6 text-[#777777]">
              You have no notifications right now. We’ll show your updates here.
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/")}
              className="mt-5 rounded-xl bg-[#234B45] px-5 py-3"
            >
              <Text className="text-sm font-bold text-white">
                Explore Furniture
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
