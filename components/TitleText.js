import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = (props) => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: 21,
  },
});

export default TitleText;
