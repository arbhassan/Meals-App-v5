import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const defaultStackNavOptions = {
  stackAnimation: "none",
  headerTitleStyle: {
    fontSize: 18,
  },

  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const Stack = createNativeStackNavigator();
const TabNav =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNav.Navigator
        initialRouteName="Meals"
        activeColor="white"
        shifting={true}
        sceneAnimationEnabled={false}
        // barStyle={{ backgroundColor: Colors.primaryColor }}
      >
        <TabNav.Screen
          name="Meals"
          component={MealsNavigator}
          options={{
            tabBarIcon: ({ color }) => {
              return <Ionicons name="ios-restaurant" size={25} color={color} />;
            },
            tabBarColor: Colors.primaryColor,
          }}
        />
        <TabNav.Screen
          name="Favorites"
          component={FavNavigator}
          barStyle={{ backgroundColor: Colors.accentColor }}
          options={{
            tabBarIcon: ({ color }) => {
              return <Ionicons name="ios-star" size={25} color={color} />;
            },
            tabBarColor: Colors.accentColor,
          }}
        />
      </TabNav.Navigator>
    </NavigationContainer>
  );
};

const MealsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
        }}
      />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FavNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
