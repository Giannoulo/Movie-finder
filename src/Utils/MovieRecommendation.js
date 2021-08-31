import MovieTile from "../Components/Card/MovieTile";

export const getOldestYearAndGenres = (pickedMovieList) => {
  let earliestReleasedYear = 3000;
  const genreMap = new Map();

  // Find the oldest picked movie year
  pickedMovieList.forEach((movie) => {
    if (parseInt(movie[2]) < earliestReleasedYear) {
      earliestReleasedYear = parseInt(movie[2]);
    }
    // Count genre occurrences
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

export const getTopGenre = (genreMap) => {
  const genreMapSorted = new Map([...genreMap.entries()].sort((a, b) => b[1] - a[1]));
  return genreMapSorted.keys().next().value;
};

export const findRecommendedMovies = (pickedMovieList, movieList, movieNumber = 10) => {
  /*
    Filter the initial movie list and show movies that are newer than 
    the oldest picked movie and contain the users most popular genre
    */
  const newMovieList = [];
  let pickedMovieListIds = pickedMovieList.map((movie) => movie[5]);
  const { earliestReleasedYear, genreMap } = getOldestYearAndGenres(pickedMovieList);
  const topGenre = getTopGenre(genreMap);
  let randomMovieId;

  // TODO Infinite loop if there are less movies(< movieNumber) that are more recent than the earliestyear
  while (newMovieList.length < movieNumber) {
    randomMovieId = Math.floor(Math.random() * movieList.length);
    try {
      if (
        !pickedMovieListIds.includes(movieList[randomMovieId][5]) &&
        movieList[randomMovieId][3]
          .split(",")
          .map((genre) => genre.trim())
          .includes(topGenre) &&
        parseInt(movieList[randomMovieId][2]) > earliestReleasedYear
      ) {
        newMovieList.push(movieList[randomMovieId]);
        pickedMovieListIds.push(movieList[randomMovieId][5]);
      }
    } catch (error) {
      throw new Error("Cant Find recommended movies");
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
