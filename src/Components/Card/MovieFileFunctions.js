import Papa from "papaparse";
import movielist from "../../Data/imdb_top_1000.csv";
import MovieTile from "./MovieTile";

export const read_csv = (props) => {
  // Load the 1000 movie list from the csv file to the redux state
  Papa.parse(movielist, {
    download: true,
    complete: function (results) {
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

// Return movie tiles jsx
export const getMovieTiles = (movieList) => {
  let newMovieList = getNewMovies(movieList);
  return (
    <>
      {newMovieList.map((newMovie) => (
        <div className="col movie-tile-col" key={newMovie[5]}>
          <MovieTile movie={newMovie} recommendation={false} />
        </div>
      ))}
    </>
  );
};

const findRecommendedMovies = (pickedMovieList, movieList) => {
  /*
  Filter the initial movie list and show movies that are newer than 
  the oldest picked movie and contain the users most popular genre
  */
  let earliestReleasedYear = 3000;
  let genreMap = new Map();
  let newMovieList = [];
  let genreMapSorted;
  let topGenre;
  let pickedMovieListIds = pickedMovieList.map((movie) => movie[5]);

  // Find the oldest picked movie year
  pickedMovieList.forEach((movie) => {
    if (parseInt(movie[2]) < earliestReleasedYear) {
      earliestReleasedYear = parseInt(movie[2]);
    }
    // Count genre occurences
    let genres = movie[3].split(",").map((genre) => genre.trim());
    genres.forEach((genre) => {
      if (!genreMap.has(genre)) {
        genreMap.set(genre, 0);
      }
      genreMap.set(genre, genreMap.get(genre) + 1);
    });
  });
  genreMapSorted = new Map([...genreMap.entries()].sort((a, b) => b[1] - a[1]));
  topGenre = genreMapSorted.keys().next().value;
  movieList.forEach((movie) => {
    if (
      !pickedMovieListIds.includes(movie[5]) &&
      movie[3]
        .split(",")
        .map((genre) => genre.trim())
        .includes(topGenre) &&
      parseInt(movie[2]) > earliestReleasedYear &&
      newMovieList.length < 10
    ) {
      newMovieList.push(movie);
    }
  });
  return newMovieList;
};

// Return recommended movie tiles jsx
export const recommendMovies = (pickedMovieList, movieList) => {
  let recommendedMovieList = findRecommendedMovies(pickedMovieList, movieList);
  return (
    <>
      {recommendedMovieList.map((recommendedMovie) => (
        <div className="col movie-tile-col" key={recommendedMovie[5]}>
          <MovieTile movie={recommendedMovie} recommendation={true} />
        </div>
      ))}
    </>
  );
};
