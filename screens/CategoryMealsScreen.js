import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text>The Categores Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details!"
        onPress={() => {
          navigation.navigate("MealDetail");
        }}
      />
      <Button title="Update the title" />
      <Button
        title="Go Back"
        onPress={() => {
          navigation.pop();
        }}
      />
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
