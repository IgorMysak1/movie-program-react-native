import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { CalendarDate } from "./CalendarDate";
import TvImage from "../assets/tv.jpg";

export const ChooseDate = ({ date, setDate }) => {
  return (
    <View style={styles.chooseDate}>
      <Image style={styles.tvImage} source={TvImage} />
      <Text style={styles.text}>
        To get a list of series, select the desired date and month
      </Text>
      <CalendarDate date={date} setDate={setDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  chooseDate: {
    minHeight: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  tvImage: {
    height: 120,
    width: 160,
    marginTop: 80,
  },
  text: {
    paddingTop: 15,
    width: "70%",
    textAlign: "center",
    fontSize: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
});
