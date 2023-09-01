// import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import WelcomeScreen from "../components/screens/WelcomeScreen";

const Home = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
      <WelcomeScreen />
    </>
  );
};

export default Home;
