import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Movie } from "../components/Movie";
import { ArrowImage } from "../components/ArrowImage";
import { Loader } from "../components/Loader";
import { getMovies } from "../services/api";
import { toLocalDate } from "../utilits/toLocalDate";

const deviceWidth = Dimensions.get("window").width;

export const Movies = ({ date }) => {
  const defaultNumberMovies = 3;
  const [listOfMovies, setListOfMovies] = useState([]);
  const [showAllMovies, setShowAllMovies] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getMovies(date);
      setListOfMovies(response);
    })();
  }, []);
  const showMovies = () => {
    if (listOfMovies.length > defaultNumberMovies) {
      return listOfMovies.slice(
        0,
        showAllMovies ? listOfMovies.length : defaultNumberMovies
      );
    } else {
      return listOfMovies;
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.day}>
          <Text style={styles.dayText}>{toLocalDate(date)}</Text>
        </View>
        <View style={styles.movie}>
          {listOfMovies.length ? (
            <FlatList
              data={showMovies()}
              renderItem={(movie) => <Movie {...movie.item} />}
              keyExtractor={(movie) => movie.id}
            />
          ) : (
            <Loader />
          )}
          {!showAllMovies && listOfMovies.length > defaultNumberMovies && (
            <TouchableOpacity
              style={styles.showMore}
              onPress={() => setShowAllMovies(true)}
            >
              <Text style={{ fontSize: 16, paddingRight: 10 }}>{`Show other ${
                listOfMovies.length - 3
              }`}</Text>
              <ArrowImage scale={0.7} side="bottom" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    width: deviceWidth,
    paddingBottom: 20,
  },
  day: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#F4F4F4",
  },
  dayText: {
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 15,
  },
  movie: {
    width: "100%",
  },
  showMore: {
    borderWidth: 2,
    borderColor: "#d7d7d7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    paddingVertical: 10,
  },
});
