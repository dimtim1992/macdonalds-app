import React, { useState } from "react";
import { Text, Image, TouchableHighlight, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { popular } from "../popular";

const Popular = () => {
  const [active, setActive] = useState();
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
        Popular
      </Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {popular.map((cat, ind) => {
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
                  backgroundColor:
                    active === ind ? COLORS.secondary : COLORS.gray,
                  padding: 5,
                  justifyContent: "center",
                  height: 120,
                }}
              >
                <Image
                  source={{ uri: cat.image }}
                  style={{ width: 50, height: 50 }}
                />
                <Text
                  style={{
                    fontSize: SIZES.h3,
                    color: COLORS.white,
                    marginTop: 5,
                  }}
                >
                  {cat.name}
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.h3,
                    color: COLORS.primary,
                    marginTop: 5,
                  }}
                >
                  {cat.price}
                </Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
};

export default Popular;
