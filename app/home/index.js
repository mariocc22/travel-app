import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";

import { Stack } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../../components/categories";
import SortCategories from "../../components/sortCategories";
import Destinations from "../../components/destinations";

// to style based on ios or android due to the top notch
const ios = Platform.OS === "ios";
const topMargin = ios ? "mt-3" : "mt-10";

const HomePage = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className={"space-y-6 " + topMargin}
        >
          {/* avatar */}
          <View className="px-2 flex-row justify-between items-center mb-10">
            <Text
              style={{ fontSize: wp(7) }}
              className="font-bold text-neutral-700"
            >
              Let's Discover
            </Text>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/avatar.png")}
                style={{ height: wp(12), width: wp(12) }}
              />
            </TouchableOpacity>
          </View>
          {/* search bar */}
          <View className="mx-2 mb-4">
            <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
              <MagnifyingGlassIcon size={18} strokeWidth={3} color={"gray"} />
              <TextInput
                placeholder="Search destination"
                placeholderTextColor={"gray"}
                className="flex-1 text-base mb-1 pl-1 tracking-wider"
              />
            </View>
          </View>
          {/* categories */}
          <View>
            <Categories />
          </View>
          {/* sort categories */}
          <View>
            <SortCategories />
          </View>
          {/* destinations */}
          <View>
            <Destinations />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomePage;
