import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          stackAnimation: "none",
          headerTitleStyle: {
            fontSize: 18,
          },

          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
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
    </NavigationContainer>
  );
};

export default MealsNavigator;
