import { router, useLocalSearchParams } from "expo-router";
import {
    ArrowLeft,
    Search,
    SlidersHorizontal,
    Sofa,
    X,
} from "lucide-react-native";
import { useMemo, useState } from "react";
import {
    FlatList,
    Image,
    Keyboard,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { products } from "../data/products";

export default function SearchScreen() {
  const params = useLocalSearchParams<{
    q?: string;
    showFilters?: string;
  }>();

  const [query, setQuery] = useState(
    typeof params.q === "string" ? params.q : "",
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(params.showFilters === "true");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category)),
    );

    return ["All", ...uniqueCategories];
  }, []);

  const filteredProducts = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    return products.filter((product) => {
      const searchableText = [
        product.name,
        product.category,
        product.location,
        product.material,
        product.color,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = !searchText || searchableText.includes(searchText);

      const matchesCategory =
        selectedCategory === "All" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [query, selectedCategory]);

  const openProduct = (id: number | string) => {
    Keyboard.dismiss();

    router.push({
      pathname: "/product/[id]",
      params: { id: String(id) },
    });
  };

  const clearSearch = () => {
    setQuery("");
    Keyboard.dismiss();
  };

  return (
    <View className="flex-1 bg-[#F8F7F4]">
      {/* HEADER */}
      <View className="flex-row items-center px-4 pb-4 pt-3">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.back()}
          accessibilityLabel="Go back"
          className="mr-3 h-[42px] w-[42px] items-center justify-center rounded-full border border-[#E7E3DD] bg-white"
        >
          <ArrowLeft size={21} color="#064E46" />
        </TouchableOpacity>

        <View className="flex-1">
          <Text className="text-[19px] font-bold text-[#222222]">
            Search Products
          </Text>

          <Text className="mt-1 text-[11px] text-[#777777]">
            Find furniture for your home
          </Text>
        </View>
      </View>

      {/* SEARCH INPUT + FILTER BUTTON */}
      <View className="flex-row items-center px-4">
        <View className="h-[50px] flex-1 flex-row items-center rounded-[15px] border border-[#E7E3DD] bg-white px-3">
          <Search size={19} color="#6F746F" strokeWidth={1.8} />

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search beds, sofas, tables..."
            placeholderTextColor="#8A8A86"
            returnKeyType="search"
            autoCorrect={false}
            autoCapitalize="none"
            selectionColor="#064E46"
            cursorColor="#064E46"
            underlineColorAndroid="transparent"
            style={
              {
                flex: 1,
                height: 48,
                marginLeft: 9,
                paddingHorizontal: 0,
                paddingVertical: 0,
                borderWidth: 0,
                outlineStyle: "none",
              } as any
            }
            className="text-[13px] text-[#222222]"
          />

          {query.length > 0 && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={clearSearch}
              hitSlop={10}
              accessibilityLabel="Clear search"
            >
              <X size={18} color="#777777" />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            Keyboard.dismiss();
            setShowFilters((previous) => !previous);
          }}
          accessibilityLabel="Toggle category filters"
          className="ml-2 h-[50px] w-[50px] items-center justify-center rounded-[15px] bg-[#064E46]"
        >
          <SlidersHorizontal size={20} color="#FFFFFF" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {/* CATEGORY FILTERS */}
      {showFilters && (
        <View className="mt-4 px-4">
          <Text className="mb-3 text-[13px] font-bold text-[#222222]">
            Filter by category
          </Text>

          <FlatList
            horizontal
            data={categories}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => {
              const isSelected = selectedCategory === item;

              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSelectedCategory(item)}
                  className={`mr-2 rounded-full border px-4 py-2 ${
                    isSelected
                      ? "border-[#064E46] bg-[#064E46]"
                      : "border-[#E7E3DD] bg-white"
                  }`}
                >
                  <Text
                    className={`text-[12px] font-semibold ${
                      isSelected ? "text-white" : "text-[#444444]"
                    }`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}

      {/* RESULTS HEADER */}
      <View className="flex-row items-center justify-between px-4 pb-3 pt-5">
        <View>
          <Text className="text-[16px] font-bold text-[#222222]">
            {query.trim() ? "Search Results" : "All Furniture"}
          </Text>

          <Text className="mt-1 text-[11px] text-[#777777]">
            {filteredProducts.length} products found
          </Text>
        </View>

        {selectedCategory !== "All" && (
          <TouchableOpacity
            onPress={() => setSelectedCategory("All")}
            activeOpacity={0.7}
          >
            <Text className="text-[12px] font-semibold text-[#064E46]">
              Clear filter
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* PRODUCT RESULTS */}
      <FlatList
        key={selectedCategory}
        data={filteredProducts}
        keyExtractor={(item) => String(item.id)}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 30,
          flexGrow: 1,
        }}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center px-6 py-16">
            <View className="h-[80px] w-[80px] items-center justify-center rounded-full bg-[#E8EFEB]">
              <Sofa size={36} color="#064E46" strokeWidth={1.5} />
            </View>

            <Text className="mt-5 text-[16px] font-bold text-[#222222]">
              No products found
            </Text>

            <Text className="mt-2 text-center text-[12px] leading-5 text-[#777777]">
              Try another product name or select a different category.
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setQuery("");
                setSelectedCategory("All");
              }}
              className="mt-5 rounded-xl bg-[#064E46] px-5 py-3"
            >
              <Text className="text-[12px] font-semibold text-white">
                Clear Search
              </Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => openProduct(item.id)}
            className="mb-4 w-[48.5%] overflow-hidden rounded-[16px] border border-[#ECE8E2] bg-white p-[9px]"
          >
            {/* PRODUCT IMAGE */}
            <View className="h-[135px] items-center justify-center overflow-hidden rounded-[12px] bg-[#F5F3EF]">
              {item.image ? (
                <Image
                  source={{ uri: item.image }}
                  resizeMode="cover"
                  className="h-full w-full"
                />
              ) : (
                <Sofa size={42} color="#A4AAA5" />
              )}
            </View>

            {/* PRODUCT DETAILS */}
            <Text
              numberOfLines={2}
              className="mt-3 min-h-[36px] text-[12px] font-bold leading-[17px] text-[#222222]"
            >
              {item.name}
            </Text>

            <Text
              numberOfLines={1}
              className="mt-1 text-[10px] capitalize text-[#777777]"
            >
              {item.category}
            </Text>

            <View className="mt-3 flex-row items-center justify-between">
              <Text
                numberOfLines={1}
                className="flex-1 text-[13px] font-bold text-[#064E46]"
              >
                {item.price}
              </Text>

              <View className="ml-1 h-[28px] w-[28px] items-center justify-center rounded-[9px] bg-[#064E46]">
                <ArrowLeft
                  size={15}
                  color="#FFFFFF"
                  style={{ transform: [{ rotate: "180deg" }] }}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
