import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import Color from "../constant/Color";
import TitleText from "./TitleText";

const header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          android: styles.headerAndroid,
          ios: styles.headerIOS,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerAndroid: {
    backgroundColor: Color.primary,
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  title: {
    color: Platform.OS === "ios" ? Color.primary : "white",
  },
});

export default header;
