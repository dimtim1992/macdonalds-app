import React, { useState } from "react";
import { Text, Image, TouchableHighlight, View } from "react-native";
import { COLORS, SIZES } from "../../constants";

const CategoryItem = ({ cat, ind }) => {
  const [active, setActive] = useState();

  return (
    <TouchableHighlight
      style={{
        width: 100,
      }}
      onPress={() => setActive(ind)}
      key={Math.random().toString()}
    >
      <View
        style={{
          marginBottom: 20,
          borderRadius: SIZES.radius,
          alignItems: "center",
          backgroundColor: active === ind ? COLORS.secondary : COLORS.gray,
          padding: 5,
          justifyContent: "center",
          height: 120,
        }}
      >
        <Image source={{ uri: cat.image }} style={{ width: 50, height: 50 }} />
        <Text
          style={{
            fontSize: SIZES.h3,
            color: COLORS.white,
            marginTop: 5,
          }}
        >
          {cat.name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default CategoryItem;
