import React from "react";

const MovieTile = (props) => {
  return (
    <div onClick={() => props.increaseCardNumber()} className="movie-tile">
      <img src={props.movie[0]} alt={props.movie[1]} className="movie-tile-img" />
      <div>{props.movie[1]}</div>
    </div>
  );
};
export default MovieTile;
