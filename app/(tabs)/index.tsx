import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "@/screeens/SplashScreen";
import Onboarding from "@/screeens/Onboarding";
import Login from "@/screeens/Login";
import Signup from "@/screeens/Signup";
import Homepage from "@/screeens/Homepage";
import MyAccount from "@/screeens/MyAccount";
import BookMarks from "@/screeens/BookMarks";

import NewsDetails from "@/screeens/NewsDetails";
import { Platform } from "react-native";
import Feather from "@expo/vector-icons/Feather";

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Homepage: undefined;
  Onboarding: undefined;
  Signup: undefined;
  Home: undefined;
  NewsDetails: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

type FeatherIconName = "home" | "bookmark" | "user";

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: FeatherIconName = "home"; // Set default value

        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Book Marks") {
          iconName = "bookmark";
        } else if (route.name === "My Account") {
          iconName = "user";
        }

        return (
          <Feather
            name={iconName}
            size={24}
            color={focused ? "#006D5B" : "gray"}
          />
        );
      },
      tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: "700",
      },
      tabBarStyle: {
        height: Platform.OS === "ios" ? 89 : 55,
      },
      tabBarActiveTintColor: "#006D5B",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Home" component={Homepage} />
    <Tab.Screen name="Book Marks" component={BookMarks} />
    <Tab.Screen name="My Account" component={MyAccount} />
  </Tab.Navigator>
);

export default function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Homepage" component={TabNavigator} />

      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
