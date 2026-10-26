import { router } from "expo-router";
import { ArrowLeft, ChevronRight } from "lucide-react-native";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  {
    name: "Beds",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sofas",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Tables",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Chairs",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Wardrobes",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Cabinets",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "TV Units",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Desks",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6b1?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Bookshelves",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dressers",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dining",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Mandir",
    image:
      "https://images.unsplash.com/photo-1604608672516-f1b9e4d3e0a1?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Decor",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Storage",
    image:
      "https://images.unsplash.com/photo-1595428773924-1f6b9f8d3f4b?auto=format&fit=crop&w=500&q=80",
  },
];

export default function AllCategories() {
  const { width } = useWindowDimensions();

  const horizontalPadding = 14;
  const columnGap = 10;

  // 3 responsive columns
  const cardWidth = (width - horizontalPadding * 2 - columnGap * 2) / 3;

  return (
    <SafeAreaView className="flex-1 bg-[#F8F7F4]" edges={["top", "bottom"]}>
      <View className="flex-1 bg-[#F8F7F4]">
        {/* HEADER */}
        <View className="border-b border-[#E8E5DF] bg-[#F8F7F4] px-[18px] pb-[13px] pt-[10px]">
          <View className="flex-row items-center justify-between">
            {/* BACK */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.back()}
              className="h-[38px] w-[38px] items-center justify-center rounded-full bg-white"
            >
              <ArrowLeft size={19} color="#234B45" strokeWidth={2} />
            </TouchableOpacity>

            {/* TITLE */}
            <Text className="text-[18px] font-bold text-[#222222]">
              All Categories
            </Text>

            {/* SEARCH */}
            <TouchableOpacity
              activeOpacity={0.7}
              className="h-[38px] w-[38px] items-center justify-center rounded-full bg-white"
            ></TouchableOpacity>
          </View>
        </View>

        {/* CATEGORY CONTENT */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: horizontalPadding,
            paddingTop: 16,
            paddingBottom: 35,
          }}
        >
          {/* CATEGORY GRID */}
          <View className="flex-row flex-wrap justify-between">
            {categories.map((category) => (
              <TouchableOpacity
                key={category.name}
                activeOpacity={0.9}
                onPress={() =>
                  router.push({
                    pathname: "/category/[category]",
                    params: {
                      category: category.name.toLowerCase(),
                    },
                  })
                }
                style={{
                  width: cardWidth,
                }}
                className="mb-[12px] overflow-hidden rounded-[14px] border border-[#ECE8E2] bg-white"
              >
                {/* IMAGE */}
                <View className="h-[92px] bg-[#F2F0EA]">
                  <Image
                    source={{ uri: category.image }}
                    resizeMode="cover"
                    className="h-full w-full"
                  />
                </View>

                {/* CATEGORY NAME */}
                <View className="flex-row items-center px-[7px] py-[9px]">
                  <Text
                    numberOfLines={1}
                    className="flex-1 text-[10px] font-bold text-[#222222]"
                  >
                    {category.name}
                  </Text>

                  <ChevronRight size={13} color="#17665D" strokeWidth={2} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
