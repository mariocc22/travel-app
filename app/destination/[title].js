import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { destinationData } from "../../constants";
import { Stack } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { useRouter } from "expo-router";
import { useState } from "react";
import { theme } from "../../theme";

const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-10";

const Destination = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const destination = destinationData.filter(
    (item) => item.url_path === params.title
  )[0];

  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
      <View className="bg-white flex-1">
        {/* destination image */}
        <Image
          source={destination.image}
          style={{ width: wp(100), height: hp(55) }}
        />
        <StatusBar style={"light"} />

        {/* back button */}
        <SafeAreaView
          className={
            "flex-row justify-between items-center w-full absolute " + topMargin
          }
        >
          <TouchableOpacity
            onPress={() => router.back()}
            className="p-2 rounded-full ml-4"
            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          >
            <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleFavourite(!isFavorite)}
            className="p-2 rounded-full mr-4"
            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          >
            <HeartIcon
              size={wp(7)}
              strokeWidth={4}
              color={isFavorite ? "red" : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>

        {/* title, description & booking button */}
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14"
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="space-y-5"
          >
            <View className="flex-row justify-between items-start">
              <Text
                style={{ fontSize: wp(7) }}
                className="font-bold flex-1 text-neutral-700"
              >
                {destination?.title}
              </Text>
              <Text
                style={{ fontSize: wp(7), color: theme.text }}
                className="font-semibold"
              >
                $ {destination?.price}
              </Text>
            </View>
            <Text
              style={{ fontSize: wp(3.7) }}
              className="text-neutral-700 tracking-wide mb-2"
            >
              {destination?.longDescription}
            </Text>
            <View className="flex-row justify-between mx-1">
              <View className="flex-row space-x-2 items-start">
                <ClockIcon size={wp(7)} color="skyblue" />
                <View className="flex space-y-2">
                  <Text
                    style={{ fontSize: wp(4.5) }}
                    className="font-bold text-neutral-700"
                  >
                    {destination.duration}
                  </Text>
                  <Text className="text-neutral-600 tracking-wide">
                    Duration
                  </Text>
                </View>
              </View>
              <View className="flex-row space-x-2 items-start">
                <MapPinIcon size={wp(7)} color="#f87171" />
                <View className="flex space-y-2">
                  <Text
                    style={{ fontSize: wp(4.5) }}
                    className="font-bold text-neutral-700"
                  >
                    {destination.distance}
                  </Text>
                  <Text className="text-neutral-600 tracking-wide">
                    Distance
                  </Text>
                </View>
              </View>
              <View className="flex-row space-x-2 items-start">
                <SunIcon size={wp(7)} color="orange" />
                <View className="flex space-y-2">
                  <Text
                    style={{ fontSize: wp(4.5) }}
                    className="font-bold text-neutral-700"
                  >
                    {destination.weather}
                  </Text>
                  <Text className="text-neutral-600 tracking-wide">Sunny</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: theme.bg(0.8),
              height: wp(15),
              width: wp(50),
            }}
            className="mb-6 mx-auto flex justify-center items-center rounded-full"
          >
            <Text
              className="text-white font-bold"
              style={{ fontSize: wp(5.5) }}
            >
              Book now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Destination;
