import React, { useLayoutEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import MealsList from '../components/MealsList/MealsList';
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { RootStackParamList } from "../types";

type MealsOverviewScreenProps = {
  route: RouteProp<RootStackParamList, "MealsOverview">;
  navigation: NativeStackNavigationProp<RootStackParamList, "MealsOverview">;
};

const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({
  route,
  navigation,
}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
