export const convertDataMovie = (listOfMovies) =>
  listOfMovies.map((movie) => ({
    id: movie.id,
    name: movie?.name,
    season: movie?.season,
    year: movie?.show?.premiered?.slice(0, 4),
    image: movie?.show?.image?.original,
    episods: movie?.number,
  }));
export const convertDate = (date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
};
