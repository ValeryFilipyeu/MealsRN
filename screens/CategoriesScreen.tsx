import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { Category } from "../types";

import { CATEGORIES } from "../data/dummy-data";

type CategoriesScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ navigation }) => {
  const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;