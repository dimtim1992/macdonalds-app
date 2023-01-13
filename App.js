import React from "react";
import { ScrollView } from "react-native";
import { COLORS } from "./constants";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
import Popular from "./src/components/Popular";

export default function App() {
  return (
    <ScrollView
      style={{ padding: 24, paddingTop: 32, backgroundColor: COLORS.black }}
    >
      <Header />
      <Categories />
      <Popular />
    </ScrollView>
  );
}
