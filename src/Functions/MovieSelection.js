import Papa from "papaparse";
import movieCsvFile from "../Data/imdb_top_1000.csv";
import MovieTile from "../Components/Card/MovieTile";

export const read_csv = (props) => {
  // Load the 1000 movie list from the csv file to the redux state

  try {
    Papa.parse(movieCsvFile, {
      download: true,
      complete: function (results) {
        results.data.shift(); // Remove csv header row
        props.populateMovieList(results.data);
      },
    });
  } catch (error) {
    throw new Error("Parse movie csv file error");
  }
};

const getRandomNumbers = () => {
  // Get 3 random int numbers between 0-1000

  const movieIds = [];

  while (movieIds.length < 5) {
    let movieId = Math.floor(Math.random() * 1000) + 1;
    if (!movieIds.includes(movieId)) {
      movieIds.push(movieId);
    }
  }
  return movieIds;
};

const getNewMovies = (movieList) => {
  // Return an array of 3 random movies from the 1000 list

  const movieIds = getRandomNumbers();
  const newMovieList = [];
  let foundMovie;

  for (let movieId of movieIds) {
    foundMovie = movieList.find((movie) => movie[5] === movieId.toString());
    newMovieList.push(foundMovie);
  }
  return newMovieList;
};

export const getMovieTiles = (movieList) => {
  // Return movie tiles JSX

  let newMovieList = getNewMovies(movieList);
  try {
    return (
      <>
        {newMovieList.map((newMovie) => (
          <div className="col movie-tile-col" key={newMovie[5]}>
            <MovieTile movie={newMovie} recommendation={false} />
          </div>
        ))}
      </>
    );
  } catch (error) {
    throw new Error("Get Movie tile JSX Error");
  }
};
