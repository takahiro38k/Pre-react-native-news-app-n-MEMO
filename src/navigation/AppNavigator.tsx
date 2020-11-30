import React from "react";

// expoにdefaultで含まれるが、なぜかsuggestで @expo/ が表示されないので注意。
// ==============================
// icon一覧
// https://icons.expo.fyi/
import { FontAwesome } from "@expo/vector-icons";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ArticleScreen from "../screens/ArticleScreen";
import ClipScreen from "../screens/ClipScreen";
import HomeScreen from "../screens/HomeScreen";
import ReactNativeMemo from "../../ReactNativeMemo";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // 規定のheaderを非表示
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Clip" component={ClipScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

// tab barにiconを表示
// https://reactnavigation.org/docs/tab-based-navigation#customizing-the-appearance
// ==============================
// arrow funcでobjectを返すので、() => ({}) の形式。
const screenOption = ({ route }): BottomTabNavigationOptions => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === "Home") {
      // https://icons.expo.fyi/FontAwesome/home
      iconName = "home";
    } else if (route.name === "Clip") {
      // https://icons.expo.fyi/FontAwesome/bookmark
      iconName = "bookmark";
      // ❗️❗️memo用のiconなのでappには不要。
    } else if (route.name === "Info") {
      iconName = "info-circle";
    }
    // You can return any component that you like here!
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Clip" component={ClipStack} />
        {/* ❗️❗️memo用のtabなのでappには不要。 */}
        <Tab.Screen name="Info" component={ReactNativeMemo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
