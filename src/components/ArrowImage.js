import React from "react";
import { StyleSheet, Image } from "react-native";
import arrowRight from "../assets/arrow.png";

export const ArrowImage = ({ side, scale = 1 }) => {
  return (
    <Image
      style={{
        transform: [...styles.sideArrow[side].transform, { scale }],
      }}
      source={arrowRight}
    />
  );
};

const styles = StyleSheet.create({
  sideArrow: {
    left: { transform: [{ rotate: "180deg" }] },
    right: { transform: [{ rotate: "0deg" }] },
    top: { transform: [{ rotate: "270deg" }] },
    bottom: { transform: [{ rotate: "90deg" }] },
  },
});
