import React from "react";
import { connect } from "react-redux";

const MovieTile = (props) => {
  return (
    <>
      {props.darkMode ? (
        <div className="movie-tile ">
          <img
            onClick={() => props.increaseCardNumber()}
            src={props.movie[0]}
            alt={props.movie[1]}
            className="movie-tile-img dark-tile-img"
          />
          <div>{props.movie[1]}</div>
        </div>
      ) : (
        <div className="movie-tile">
          <img
            onClick={() => props.increaseCardNumber()}
            src={props.movie[0]}
            alt={props.movie[1]}
            className="movie-tile-img"
          />
          <div>{props.movie[1]}</div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({ darkMode: state.movies.darkMode });

export default connect(mapStateToProps)(MovieTile);
