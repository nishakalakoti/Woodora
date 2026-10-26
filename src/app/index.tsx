import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import Categories from "../components/home/Categories";
import PopularFurniture from "../components/home/PopularFurniture";
import SearchBar from "../components/home/SearchBar";
import PromoBanner from "@/components/home/PromoBanner";
import RecommendedFurniture from "@/components/home/RecommendedFurniture";
import SpecialOffers from "@/components/home/SpecialOffers";
import RecentlyViewed from "@/components/home/RecentlyViewed";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F7F4]" edges={["top", "bottom"]}>
      {/* FIXED HEADER */}
      <Header />

      {/* SCROLLABLE CONTENT */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingTop: 14,
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar />
        <PromoBanner />
        <Categories />

        <PopularFurniture />
        <RecommendedFurniture />
        <SpecialOffers />
        <RecentlyViewed />
      </ScrollView>

      {/* FIXED BOTTOM NAVIGATION */}
      <Footer />
    </SafeAreaView>
  );
}
