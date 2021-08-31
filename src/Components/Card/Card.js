import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  populateMovieList,
  playFinderFunction,
  restartFinderFunction,
} from "../../Redux/Actions/movieListActions";
import { recommendMovies } from "../../Utils/MovieRecommendation";
import { read_csv, getMovieTiles } from "../../Utils/MovieSelection";

const Card = (props) => {
  // Load the movie list on Redux on first render
  useEffect(() => {
    if (props.movieList === null) {
      read_csv(props);
    }
  });

  // Keep updated Movie Tiles
  const [movieTiles, setmovieTiles] = useState("");
  const renderMovieTiles = () => {
    if (!props.playFinder) {
      props.playFinderFunction();
    }
    setmovieTiles(getMovieTiles(props.movieList));
  };

  // Show Recommended movies after 10 picks
  const showRecommendationMovies = () => {
    setmovieTiles(recommendMovies(props.pickedMovieList, props.movieList));
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  // Re Render MovieTiles
  useEffect(() => {
    const renderMovieTiles = () => {
      if (!props.playFinder) {
        props.playFinderFunction();
      }
      setmovieTiles(getMovieTiles(props.movieList));
    };

    if (props.cardNumber > 0 && props.cardNumber < 10) {
      renderMovieTiles();
    } else if (props.cardNumber === 10) {
      showRecommendationMovies();
    }
    /* eslint-disable */
  }, [props.cardNumber]); // TODO fix eslint warning

  return (
    <div
      className={`row justify-content-center ${props.darkMode ? "dark-body" : ""}`}
      id="card-row"
    >
      {props.playFinder ? (
        <div className={`col ${props.darkMode ? "dark-card" : ""}`} id="card-col">
          {props.cardNumber === 10 ? (
            <h2 id="card-title" className="recommendation">
              You should check out these movies!
            </h2>
          ) : (
            <h2 id="card-title">Choose your favorite movies!</h2>
          )}
          <div className="row">{movieTiles}</div>
          <div className="row justify-content-center">
            {props.cardNumber === 10 ? (
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary complete"
                  id="play-button"
                  onClick={() => {
                    props.restartFinderFunction();
                  }}
                >
                  Start Again!
                </button>
              </div>
            ) : (
              <>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-primary restart"
                    id="play-button"
                    onClick={() => props.restartFinderFunction()}
                  >
                    Restart
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-primary none"
                    id="play-button"
                    onClick={() => renderMovieTiles()}
                  >
                    None
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className={`col ${props.darkMode ? "dark-card" : ""}`} id="card-col">
          <p id="card-title-landing">
            Movie Finder lets you discover new movies to watch by evaluating your favorite movies.
            Simply pick your favorite movies from each selection and let A.I. do the rest!
          </p>
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-primary"
                id="play-button"
                onClick={() => renderMovieTiles()}
              >
                Play
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pickedMovieList: state.pickedMovieList,
  movieList: state.movieList,
  playFinder: state.playFinder,
  cardNumber: state.cardNumber,
  darkMode: state.darkMode,
});

const mapDispatchToProps = { populateMovieList, playFinderFunction, restartFinderFunction };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
