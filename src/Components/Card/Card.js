import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  populateMovieList,
  playFinderFunction,
  increaseCardNumber,
} from "../../Redux/Actions/movieListActions";
import { read_csv, getMovieTiles } from "./MovieFileFunctions";

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
    setmovieTiles(getMovieTiles(props.movieList, props.increaseCardNumber));
  };

  // Re Render MovieTiles
  useEffect(() => {
    if (props.cardNumber > 0) {
      renderMovieTiles();
    }
  }, [props.cardNumber]); // TODO fix eslint warning

  return (
    <>
      {props.darkMode ? (
        <div className="row justify-content-center dark-body" id="card-row">
          {props.playFinder ? (
            <div className="col dark-card" id="card-col">
              <h2 id="card-title">Choose your favorite Movie!</h2>
              <div className="row">{movieTiles}</div>
            </div>
          ) : (
            <div className="col dark-card" id="card-col">
              <h5 id="card-title">
                Movie Finder lets you discover new movies to watch by evaluating your favorite
                movies. Simply pick your favorite movies from each selection and let A.I. do the
                rest!
              </h5>
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
      ) : (
        <div className="row justify-content-center" id="card-row">
          {props.playFinder ? (
            <div className="col" id="card-col">
              <h2 id="card-title">Choose your favorite Movie!</h2>
              <div className="row">{movieTiles}</div>
            </div>
          ) : (
            <div className="col" id="card-col">
              <h5 id="card-title">
                Movie Finder lets you discover new movies to watch by evaluating your favorite
                movies. Simply pick your favorite movies from each selection and let A.I. do the
                rest!
              </h5>
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
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  pickedMovieList: state.movies.pickedMovieList,
  movieList: state.movies.movieList,
  playFinder: state.movies.playFinder,
  cardNumber: state.movies.cardNumber,
  darkMode: state.movies.darkMode,
});

const mapDispatchToProps = { populateMovieList, playFinderFunction, increaseCardNumber };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
