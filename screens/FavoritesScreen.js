import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          ></Item>
        </HeaderButtons>
      ),
      title: "Your Favorites",
    });
  }, []);

  return <MealList listData={favMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({});
export default FavoritesScreen;
