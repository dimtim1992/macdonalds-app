import React, { useState } from "react";
import { Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { categories } from "../categories";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <View
      style={{
        paddingTop: 40,
      }}
    >
      <Text
        style={{
          fontSize: SIZES.h2,
          fontWeight: "bold",
          color: COLORS.white,
        }}
      >
        Hey
      </Text>
      <Text
        style={{
          fontSize: SIZES.h2,
          color: COLORS.white,
        }}
      >
        What's up?
      </Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {categories.map((cat, ind) => {
          return <CategoryItem cat={cat} ind={ind} />;
        })}
      </View>
    </View>
  );
};

export default Categories;
