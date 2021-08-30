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

const getNewMovies = (movieList) => {
  // Return an array of 3 random movies from the 1000 list
  const movieIds = [];
  const newMovieList = [];
  let foundMovie = null;

  // Get 3 random int numbers between 0-1000
  while (movieIds.length < 5) {
    let movieId = Math.floor(Math.random() * 1000) + 1;
    if (!movieIds.includes(movieId)) {
      movieIds.push(movieId);
    }
  }

  // Get the movies that correspond to the 3 random numbers
  for (let movieId of movieIds) {
    foundMovie = movieList.find((movie) => movie[5] === movieId.toString());
    newMovieList.push(foundMovie);
  }
  return newMovieList;
};

// Return movie tiles JSX
export const getMovieTiles = (movieList) => {
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
    console.log("movie tile error ", newMovieList);
    throw new Error("Get Movie tile JSX Error");
  }
};
