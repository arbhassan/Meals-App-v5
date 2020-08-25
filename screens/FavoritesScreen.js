import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Your Favorites",
    });
  }, []);

  return <MealList listData={favMeals} navigation={navigation} />;
};
const styles = StyleSheet.create({});
export default FavoritesScreen;
