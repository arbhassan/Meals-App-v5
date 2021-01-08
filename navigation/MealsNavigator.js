import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

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

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
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
  );
};

const MealsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FavNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Fa" component={FavoritesScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FiltersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Filters" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Meals"
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        }}
        screenOptions={defaultStackNavOptions}
      >
        <Drawer.Screen
          name="MealsFavs"
          component={AppNavigator}
          options={{ drawerLabel: "Meals" }}
        />
        <Drawer.Screen name="Filters" component={FiltersNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
