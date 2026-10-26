import { router } from "expo-router";
import {
    ArrowLeft,
    ChevronDown,
    ChevronRight,
    Headphones,
    Mail,
    MessageCircle,
    Phone,
    Search,
} from "lucide-react-native";
import { useState } from "react";
import {
    Linking,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "Open My Orders from your profile to view your order status and tracking information.",
  },
  {
    question: "How can I cancel an order?",
    answer:
      "Open your order details and check the available cancellation options. Order cancellation will be connected with the order API later.",
  },
  {
    question: "How can I change my delivery address?",
    answer:
      "Visit Saved Addresses from your profile to manage your delivery locations.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "Available payment methods will be displayed during checkout after payment integration.",
  },
  {
    question: "How can I return a product?",
    answer:
      "Return eligibility and instructions will be available in your order details once the returns feature is connected.",
  },
];

export default function HelpSupportPage() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(0);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F7F4]"
      edges={["top", "left", "right"]}
    >
      <View className="flex-row items-center border-b border-[#E8E5DF] px-5 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 h-10 w-10 items-center justify-center rounded-full border border-[#E8E5DF] bg-white"
        >
          <ArrowLeft size={20} color="#234B45" />
        </TouchableOpacity>

        <View className="flex-1">
          <Text className="text-xl font-bold text-[#234B45]">
            Help & Support
          </Text>
          <Text className="mt-1 text-xs text-[#777777]">
            How can we help you?
          </Text>
        </View>

        <Headphones size={23} color="#234B45" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 30 }}
      >
        <View className="rounded-[22px] bg-[#234B45] p-5">
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <Headphones size={26} color="#E0C39B" />
          </View>

          <Text className="mt-4 text-xl font-bold text-white">
            We're here to help
          </Text>

          <Text className="mt-2 text-xs leading-5 text-[#D7E2DC]">
            Find answers to common questions about your furniture orders,
            delivery and payments.
          </Text>
        </View>

        <Text className="mb-3 mt-6 text-lg font-bold text-[#252925]">
          Contact Us
        </Text>

        <View className="flex-row gap-3">
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("mailto:support@example.com").catch(() => {})
            }
            className="flex-1 items-center rounded-2xl border border-[#EAE6DF] bg-white p-4"
          >
            <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#E9F1ED]">
              <Mail size={21} color="#234B45" />
            </View>
            <Text className="mt-3 text-xs font-bold text-[#252925]">
              Email Us
            </Text>
            <Text className="mt-1 text-center text-[10px] text-[#777777]">
              Send an email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL("tel:+910000000000").catch(() => {})}
            className="flex-1 items-center rounded-2xl border border-[#EAE6DF] bg-white p-4"
          >
            <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#E9F1ED]">
              <Phone size={21} color="#234B45" />
            </View>
            <Text className="mt-3 text-xs font-bold text-[#252925]">
              Call Us
            </Text>
            <Text className="mt-1 text-center text-[10px] text-[#777777]">
              Talk to support
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="mb-3 mt-6 text-lg font-bold text-[#252925]">
          Frequently Asked Questions
        </Text>

        <View className="rounded-[18px] border border-[#EAE6DF] bg-white px-4">
          <View className="my-3 flex-row items-center rounded-xl bg-[#F8F7F4] px-3">
            <Search size={18} color="#777777" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search your question..."
              placeholderTextColor="#999999"
              className="ml-2 flex-1 py-3 text-sm text-[#252925]"
            />
          </View>

          {filteredFaqs.map((faq) => {
            const index = faqs.indexOf(faq);
            const isOpen = expanded === index;

            return (
              <View
                key={faq.question}
                className="border-t border-[#F0EDE7] py-4"
              >
                <TouchableOpacity
                  onPress={() => setExpanded(isOpen ? null : index)}
                  className="flex-row items-center justify-between"
                >
                  <Text className="flex-1 pr-3 text-sm font-semibold text-[#303530]">
                    {faq.question}
                  </Text>
                  {isOpen ? (
                    <ChevronDown size={18} color="#234B45" />
                  ) : (
                    <ChevronRight size={18} color="#777777" />
                  )}
                </TouchableOpacity>

                {isOpen && (
                  <Text className="mt-3 text-xs leading-5 text-[#777777]">
                    {faq.answer}
                  </Text>
                )}
              </View>
            );
          })}

          {filteredFaqs.length === 0 && (
            <Text className="py-5 text-center text-sm text-[#777777]">
              No matching questions found.
            </Text>
          )}
        </View>

        <View className="mt-5 flex-row items-center rounded-2xl bg-[#E9F1ED] p-4">
          <MessageCircle size={22} color="#234B45" />
          <View className="ml-3 flex-1">
            <Text className="text-sm font-bold text-[#234B45]">
              Still need help?
            </Text>
            <Text className="mt-1 text-xs text-[#66736B]">
              Our support options will be connected soon.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
