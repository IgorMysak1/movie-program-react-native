import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export const Movie = ({ name, season, year, image, episods }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.content}>
        <View>
          <Text>{name}</Text>
          <Text style={{ paddingTop: 5 }}>{year}</Text>
        </View>
        <View style={styles.parts}>
          <Text style={{ paddingRight: 10 }}>Season: {season ?? "-"}</Text>
          <Text>Episod: {episods ?? "-"}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "75%",
    flexDirection: "row",
    padding: 20,
  },
  image: {
    height: 150,
    width: 100,
  },
  content: {
    paddingLeft: 20,
    justifyContent: "space-between",
  },
  parts: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "left",
  },
});
