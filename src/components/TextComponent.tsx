import { View, Text, StyleProp, TextStyle } from "react-native";
import React from "react";
import { globaStyles } from "../styles/globaStyles";
import { fontFamily } from "../constant/fontFamily";
import { Colors } from "../constant/Colors";

interface props {
  text: string;
  font?: string;
  color?: string;
  size?: number;
  tyle?: "title" | "description";
  styles?: StyleProp<TextStyle>;
  flex?: number
}
const Textconponent = (Props: props) => {
  const { text, font, color, size, tyle, styles,flex } = Props;

  return (
    <Text
      style={[
        globaStyles.text,
        {
          fontFamily:
          tyle === "title" ? fontFamily.bold : fontFamily.regular,
          fontSize:  20,
          color: 'white',
          flex : flex ?? 0,
        },
        styles, 
      ]}
    >
      {text}
    </Text>
  );
};

export { Textconponent };
