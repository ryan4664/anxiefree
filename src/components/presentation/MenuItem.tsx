import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

export const MenuItem = ({ title, onPress }) => {
  return (
    <TouchableHighlight style={styles.menuItemContainer} onPress={onPress}>
      <Text style={styles.menuItemText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    flex: 1,
    minHeight: "25%",
    minWidth: "45%",
    margin: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#52459f",
    backgroundColor: "#5649a8",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  menuItemText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Ubuntu",
    fontSize: 20
  }
});
