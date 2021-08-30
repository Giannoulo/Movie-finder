import MovieTile from "../Components/Card/MovieTile";

const getOldestYearAndGenres = (pickedMovieList) => {
  let earliestReleasedYear = 3000;
  const genreMap = new Map();

  // Find the oldest picked movie year
  pickedMovieList.forEach((movie) => {
    if (parseInt(movie[2]) < earliestReleasedYear) {
      earliestReleasedYear = parseInt(movie[2]);
    }
    // Count genre occurences
    const genres = movie[3].split(",").map((genre) => genre.trim());
    genres.forEach((genre) => {
      if (!genreMap.has(genre)) {
        genreMap.set(genre, 0);
      }
      genreMap.set(genre, genreMap.get(genre) + 1);
    });
  });
  return { earliestReleasedYear, genreMap };
};

const getTopGenre = (genreMap) => {
  const genreMapSorted = new Map([...genreMap.entries()].sort((a, b) => b[1] - a[1]));
  return genreMapSorted.keys().next().value;
};

const findRecommendedMovies = (pickedMovieList, movieList) => {
  /*
    Filter the initial movie list and show movies that are newer than 
    the oldest picked movie and contain the users most popular genre
    */
  const newMovieList = [];
  const pickedMovieListIds = pickedMovieList.map((movie) => movie[5]);
  const { earliestReleasedYear, genreMap } = getOldestYearAndGenres(pickedMovieList);
  const topGenre = getTopGenre(genreMap);
  let randomMovieId;

  while (newMovieList.length < 10) {
    randomMovieId = Math.floor(Math.random() * 1000) + 1;
    if (
      !pickedMovieListIds.includes(movieList[randomMovieId][5]) &&
      movieList[randomMovieId][3]
        .split(",")
        .map((genre) => genre.trim())
        .includes(topGenre) &&
      parseInt(movieList[randomMovieId][2]) > earliestReleasedYear
    ) {
      newMovieList.push(movieList[randomMovieId]);
    }
  }
  return newMovieList;
};

// Return recommended movie tiles jsx
export const recommendMovies = (pickedMovieList, movieList) => {
  const recommendedMovieList = findRecommendedMovies(pickedMovieList, movieList);
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
