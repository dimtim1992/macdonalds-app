import React from "react";
import { View, Image, Linking, TouchableHighlight } from "react-native";
import { COLORS } from "../../constants";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <TouchableHighlight
          onPress={() => Linking.openURL("https://mcdonalds.com")}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/732/732060.png",
            }}
            style={{
              width: 40,
              height: 40,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableHighlight>
      </View>
      <View>
        <Image
          source={{
            uri: "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png",
          }}
          style={{
            width: 40,
            height: 40,
            tintColor: COLORS.white,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
