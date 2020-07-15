import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
