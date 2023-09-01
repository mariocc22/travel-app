import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

// router expo
import { useRouter } from "expo-router";

// this import helps you to make the fonts responsive
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// add gradients
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 flex justify-end">
      {/* background image */}
      <Image
        source={require("../../assets/images/welcome.png")}
        className="h-full w-full absolute"
      />

      {/* content & gradient */}
      <View className="p-5 pb-10 space-y-8">
        {/* Gradient background */}
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={{ width: wp(100), height: hp(60) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        <View className="space-y-3">
          <Text
            className="text-white font-bold text-5xl"
            style={{ fontSize: wp(12) }}
          >
            Traveling made easy!
          </Text>
          <Text
            className="text-neutral-200 font-medium"
            style={{ fontSize: wp(5) }}
          >
            Experience the world's best adventure around the world with us
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push(`/home`)}
          className="bg-orange-500 mx-auto p-3 px-12 rounded-full"
        >
          <Text className="text-white font-bold" style={{ fontSize: wp(6) }}>
            Let's go!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
