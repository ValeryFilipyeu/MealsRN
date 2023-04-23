import MealDetailScreen from "../screens/MealDetailScreen";

export type Category = {
  id: string;
  title: string;
  color: string;
};

export type Meal = {
  id: string;
  title: string;
  imageUrl: string;
  affordability: string;
  complexity: string;
  duration: number;
};

export type RootStackParamList = {
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};
