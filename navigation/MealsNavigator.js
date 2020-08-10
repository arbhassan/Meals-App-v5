import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();
const TabNav = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNav.Navigator>
        <TabNav.Screen name="Meals" component={MealsNavigator} />
        <TabNav.Screen name="Favorites" component={FavoritesScreen} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
};

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        stackAnimation: "none",
        headerTitleStyle: {
          fontSize: 18,
        },

        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
      }}
    >
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

export default AppNavigator;
