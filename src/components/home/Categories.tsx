import { router } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  {
    name: "Beds",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sofas",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Tables",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Chairs",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Wardrobes",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Cabinets",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "TV Units",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Desks",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6b1?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Bookshelves",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dressers",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dining",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mandir",
    image:
      "https://images.unsplash.com/photo-1604608672516-f1b9e4d3e0a1?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Decor",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Storage",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Categories() {
  return (
    <View className="mt-7">

      {/* HEADING */}
      <View className="mb-[14px] flex-row items-center justify-between">

        <Text className="text-[18px] font-bold text-[#222222]">
          Categories
        </Text>

        {/* VIEW ALL */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center"
          onPress={() => router.push("/category")}
        >
          <Text className="text-[12px] font-semibold text-[#17665D]">
            View All
          </Text>

          <ChevronRight
            size={14}
            color="#17665D"
            strokeWidth={2}
          />
        </TouchableOpacity>

      </View>

      {/* CATEGORY LIST */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: 10,
        }}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.name}
            activeOpacity={0.8}
            onPress={() =>
              router.push({
                pathname: "/category/[category]",
                params: {
                  category: category.name.toLowerCase(),
                },
              })
            }
            className="mr-[12px] items-center"
          >

            {/* IMAGE CARD */}
            <View className="h-[62px] w-[62px] overflow-hidden rounded-[16px] border border-[#ECE8E2] bg-white">

              <Image
                source={{ uri: category.image }}
                resizeMode="cover"
                className="h-full w-full"
              />

            </View>

            {/* CATEGORY NAME */}
            <Text
              numberOfLines={1}
              className="mt-[7px] max-w-[70px] text-center text-[11px] font-medium text-[#333333]"
            >
              {category.name}
            </Text>

          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
}