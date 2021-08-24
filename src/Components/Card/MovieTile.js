import React, { useState } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const MovieTile = (props) => {
  const [showDescription, setshowDescription] = useState("movie-tile-description-hidden");

  return (
    <>
      {props.darkMode ? (
        <div className="movie-tile ">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="movietile-info"
            onMouseEnter={() => setshowDescription("movie-tile-description-shown")}
            onMouseLeave={() => setshowDescription("movie-tile-description-hidden")}
            onTouchStart={() => setshowDescription("movie-tile-description-shown")}
            onTouchEnd={() => setshowDescription("movie-tile-description-hidden")}
          />
          <p className={showDescription}>{props.movie[4]}</p>
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
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="movietile-info"
            onMouseEnter={() => setshowDescription("movie-tile-description-shown")}
            onMouseLeave={() => setshowDescription("movie-tile-description-hidden")}
            onTouchStart={() => setshowDescription("movie-tile-description-shown")}
            onTouchEnd={() => setshowDescription("movie-tile-description-hidden")}
          />
          <p className={showDescription}>{props.movie[4]}</p>
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
