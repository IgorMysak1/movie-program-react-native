import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigationState } from "@react-navigation/native";
import { ArrowImage } from "./ArrowImage";
import BgImage from "../assets/bg_header.jpg";

const deviceWidth = Dimensions.get("window").width;

export const Header = ({ goBack }) => {
  const [currPage, setCurrPage] = useState("ChooseDate");
  const routes = useNavigationState((state) => state?.routes);
  useEffect(() => {
    const currentRoute = routes && routes[routes?.length - 1].name;
    setCurrPage(currentRoute);
  }, [routes]);
  return (
    <ImageBackground source={BgImage} style={styles.bgImage}>
      {currPage === "Movies" && (
        <TouchableOpacity
          style={styles.arrowImage}
          onPress={() => goBack().navigate("ChooseDate")}
        >
          <ArrowImage side="left" />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>Super Film</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    paddingTop: 33,
    width: deviceWidth,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  arrowImage: {
    position: "absolute",
    top: 60,
    left: 15,
  },
  title: {
    fontSize: 22,
  },
});
