import axios from "axios";
import { convertDataMovie, convertDate } from "../utilits/convertDate";
export const getMovies = async (date) => {
  try {
    const response = await axios.get(
      `https://api.tvmaze.com/schedule?country=US&date=${convertDate(date)}`
    );
    return convertDataMovie(response.data);
  } catch (e) {
    alert(e);
    return [];
  }
};
