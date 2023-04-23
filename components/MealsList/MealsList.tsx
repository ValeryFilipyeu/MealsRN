import React from "react";
import { View, FlatList, StyleSheet, ListRenderItemInfo } from "react-native";
import { Meal } from "../../types";

import MealItem from "./MealItem";

type MealsListProps = {
  items: Meal[]
};

const MealsList: React.FC<MealsListProps> = ({ items }) => {
  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});