import React from "react";
import { Text, View } from "react-native";

const CategoriesMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categores Meals Screen</Text>
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