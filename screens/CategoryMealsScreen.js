import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import { render } from "react-dom";

const CategoryMealsScreen = ({ route, navigation }) => {
  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  const catId = route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

// // CategoryMealsScreen.navigationOptions = (navigationData) => {
// //   const catId = navigationData.route.params.categoryId;
// //   const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
// //   return {
// //     title: selectedCategory.title,
// //   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealsScreen;
