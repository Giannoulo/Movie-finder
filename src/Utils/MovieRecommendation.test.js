import { getOldestYearAndGenres, getTopGenre, findRecommendedMovies } from "./MovieRecommendation";

test("Returns the oldest picked movie year and a genreMap test 1", () => {
  const movieList = [
    ["url1", "The Shawshank Redemption", "1991", "Drama", "Description1", 1],
    ["url2", "The Shawshank Redemption", "1984", "Crime, Drama", "Description2", 2],
    ["url3", "The Shawshank Redemption", "1994", "Action, Crime, Drama", "Description3", 3],
    ["url4", "The Shawshank Redemption", "1977", "Drama", "Description4", 4],
    ["url5", "The Shawshank Redemption", "1995", "Crime, Drama", "Description5", 5],
  ];
  let { earliestReleasedYear, genreMap } = getOldestYearAndGenres(movieList);
  expect(earliestReleasedYear).toBe(1977);
  expect(genreMap.get("Drama")).toBe(5);
});

test("Returns top genre from a genre Map", () => {
  const genreMap = new Map([
    ["Action", 4],
    ["Drama", 2],
    ["Comedy", 5],
    ["Crime", 2],
  ]);
  expect(getTopGenre(genreMap)).toBe("Comedy");
});

test("Returns movies that are newer than the oldest picked movie and contain the users most popular genre", () => {
  const movieList = [
    ["url1", "The Shawshank Redemption", "1991", "Drama", "Description1", 1],
    ["url2", "The Shawshank Redemption", "1994", "Crime, Drama", "Description2", 2], // Suitable
    ["url3", "The Shawshank Redemption", "1995", "Action, Crime, Drama", "Description3", 3],
    ["url4", "The Shawshank Redemption", "1977", "Drama", "Description4", 4],
    ["url5", "The Shawshank Redemption", "1990", "Crime, Drama", "Description5", 5],
    ["url4", "The Shawshank Redemption", "1997", "Drama", "Description6", 6], // Suitable
    ["url5", "The Shawshank Redemption", "1969", "Crime, Drama", "Description7", 7],
    ["url4", "The Shawshank Redemption", "1971", "Drama", "Description8", 8],
    ["url5", "The Shawshank Redemption", "1945", "Crime, Drama", "Description9", 9],
    ["url4", "The Shawshank Redemption", "1992", "Drama", "Description10", 10], // Suitable
  ];
  const pickedMovieList = [
    ["url1", "The Shawshank Redemption", "1991", "Drama", "Description1", 5],
    ["url2", "The Shawshank Redemption", "1994", "Crime, Drama", "Description2", 3],
    ["url3", "The Shawshank Redemption", "1995", "Action, Crime, Drama", "Description3", 1],
    ["url4", "The Shawshank Redemption", "1997", "Drama", "Description4", 8],
  ];
  const newMovieList = findRecommendedMovies(pickedMovieList, movieList, 3);
  console.log(newMovieList);
  expect(newMovieList.length).toBe(3);
  expect(newMovieList).toContainEqual([
    "url4",
    "The Shawshank Redemption",
    "1997",
    "Drama",
    "Description6",
    6,
  ]);
});
