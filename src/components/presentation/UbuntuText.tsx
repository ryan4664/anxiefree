import React from "react";
import { StyleSheet, Text } from "react-native";

export const UbuntuText = props => {
  return (
    <Text style={[defaultStyle.text, props.style]}>{props.children}</Text>
  );
};

const defaultStyle = StyleSheet.create({
  text: {
    fontFamily: "Ubuntu"
  }
});
