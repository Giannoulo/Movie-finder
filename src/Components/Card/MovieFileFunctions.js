import Papa from "papaparse";
import movielist from "../../Data/imdb_top_1000.csv";
import MovieTile from "./MovieTile";

export const read_csv = (props) => {
  // Load the 1000 movie list from the csv file to the redux state
  Papa.parse(movielist, {
    download: true,
    complete: function (results) {
      console.log("Parsing complete:", results.data);
      results.data.shift();
      props.populateMovieList(results.data);
    },
  });
};

const getNewMovies = (movieList) => {
  // Return an array of 3 random movies from the 1000 list
  let movieIds = [];
  let newMovieList = [];
  let foundMovie = null;
  // Get 3 random int numbers between 0-1000
  while (movieIds.length <= 2) {
    let movieId = Math.floor(Math.random() * 1000);
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

export const getMovieTiles = (movieList, increaseCardNumber) => {
  let newMovieList = getNewMovies(movieList);
  return (
    <>
      {newMovieList.map((newMovie) => (
        <div className="col" key={newMovie[5]}>
          <MovieTile movie={newMovie} increaseCardNumber={increaseCardNumber} />
        </div>
      ))}
    </>
  );
};
