import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, []);

  return (
    <MealList listData={displayedMeals} navigation={navigation}></MealList>
  );
};

// // CategoryMealsScreen.navigationOptions = (navigationData) => {
// //   const catId = navigationData.route.params.categoryId;
// //   const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
// //   return {
// //     title: selectedCategory.title,
// //   };
// };

export default CategoryMealsScreen;
