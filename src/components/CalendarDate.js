import React from "react";
import CalendarPicker from "react-native-calendar-picker";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowImage } from "./ArrowImage";
import { convertDate } from "../utilits/convertDate";

export const CalendarDate = ({ date, setDate }) => {
  const navigation = useNavigation();
  const currentDay = convertDate(new Date()) === convertDate(date);
  const saveDate = (event) => {
    setDate(new Date(event._i.year, event._i.month, event._i.day));
    navigation.navigate("Movies");
  };
  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={(event) => saveDate(event)}
        dayShape="square"
        weekdays={[]}
        previousComponent={<ArrowImage side="left" />}
        nextComponent={<ArrowImage side="right" />}
        showDayStragglers
        selectedDayStyle={styles.selectedDay}
        customDatesStyles={[
          {
            style: {
              backgroundColor: "#fff",
              borderColor: currentDay ? "#e10246" : "#fff",
              borderWidth: currentDay ? 2 : 0,
            },
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    paddingBottom: 40,
  },
  otherDays: {
    borderColor: "#e10246",
    borderWidth: 2,
  },
  selectedDay: {
    borderColor: "#e10246",
    borderWidth: 2,
  },
});
