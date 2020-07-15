import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CategoriesMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categores Meals Screen</Text>
      <Button
        title="Go to Details!"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoriesMealsScreen;
