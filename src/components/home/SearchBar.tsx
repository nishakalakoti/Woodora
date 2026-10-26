import { router } from "expo-router";
import { Search, SlidersHorizontal, X } from "lucide-react-native";
import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { products } from "@/data/products";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    if (!searchText) return [];

    return products
      .filter((product) => {
        return (
          product.name.toLowerCase().includes(searchText) ||
          product.category.toLowerCase().includes(searchText) ||
          product.material.toLowerCase().includes(searchText) ||
          product.color.toLowerCase().includes(searchText)
        );
      })
      .slice(0, 5);
  }, [query]);

  const openSearch = (searchText = query) => {
    const value = searchText.trim();

    if (!value) return;

    setShowSuggestions(false);

    router.push({
      pathname: "/search",
      params: { q: value },
    });
  };

  const openFilters = () => {
    setShowSuggestions(false);

    router.push({
      pathname: "/search",
      params: {
        q: query.trim(),
        showFilters: "true",
      },
    });
  };

  return (
    <View className="relative z-20">
      {/* SEARCH INPUT AND FILTER BUTTON */}
      <View className="flex-row items-center">
        <View className="h-[50px] flex-1 flex-row items-center rounded-[15px] border border-[#E7E3DD] bg-white px-[14px]">
          <Search size={19} color="#6F746F" strokeWidth={1.8} />

          <TextInput
            value={query}
            onChangeText={(value) => {
              setQuery(value);
              setShowSuggestions(Boolean(value.trim()));
            }}
            onFocus={() => {
              setShowSuggestions(Boolean(query.trim()));
            }}
            onSubmitEditing={() => openSearch()}
            placeholder="Search beds, sofas, tables..."
            placeholderTextColor="#8A8A86"
            returnKeyType="search"
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            selectionColor="#064E46"
            cursorColor="#064E46"
            style={
              {
                flex: 1,
                marginLeft: 9,
                paddingVertical: 0,
                paddingHorizontal: 0,
                height: 48,
                borderWidth: 0,
                outlineStyle: "none",
              } as any
            }
            className="text-[13px] text-[#222222]"
          />

          {query.length > 0 && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setQuery("");
                setShowSuggestions(false);
              }}
              hitSlop={10}
              accessibilityLabel="Clear search"
            >
              <X size={17} color="#777777" />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={openFilters}
          accessibilityLabel="Open filters"
          className="ml-[8px] h-[50px] w-[50px] items-center justify-center rounded-[15px] bg-[#064E46]"
        >
          <SlidersHorizontal size={20} color="#FFFFFF" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {/* LIVE SEARCH SUGGESTIONS */}
      {showSuggestions && (
        <View
          className="absolute left-0 right-0 top-[58px] overflow-hidden rounded-[15px] border border-[#E7E3DD] bg-white"
          style={{
            maxHeight: 360,
            elevation: 8,
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.12,
            shadowRadius: 12,
          }}
        >
          {suggestions.length > 0 ? (
            <>
              <Text className="px-4 pb-2 pt-3 text-[11px] font-semibold uppercase text-[#858585]">
                Suggested Products
              </Text>

              <FlatList
                data={suggestions}
                keyExtractor={(item) => String(item.id)}
                keyboardShouldPersistTaps="handled"
                nestedScrollEnabled
                renderItem={({ item }) => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => openSearch(item.name)}
                    className="flex-row items-center border-t border-[#F0EEEA] px-3 py-3"
                  >
                    <Image
                      source={{ uri: item.image }}
                      resizeMode="cover"
                      className="h-[43px] w-[43px] rounded-[10px] bg-[#F5F3EF]"
                    />

                    <View className="ml-3 flex-1">
                      <Text
                        numberOfLines={1}
                        className="text-[13px] font-semibold text-[#222222]"
                      >
                        {item.name}
                      </Text>

                      <Text
                        numberOfLines={1}
                        className="mt-1 text-[11px] capitalize text-[#777777]"
                      >
                        {item.category} · {item.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => openSearch()}
                className="items-center border-t border-[#E7E3DD] py-3"
              >
                <Text className="text-[12px] font-semibold text-[#064E46]">
                  View all results
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <View className="px-4 py-5">
              <Text className="text-[13px] text-[#777777]">
                No matching products found.
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
