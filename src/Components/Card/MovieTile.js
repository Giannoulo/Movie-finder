import React, { useState } from "react";
import { connect } from "react-redux";
import { increaseCardNumber, addPickedMovie } from "../../Redux/Actions/movieListActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const MovieTile = (props) => {
  const [showDescription, setshowDescription] = useState("movie-tile-description-hidden");
  return (
    <div className="movie-tile">
      <FontAwesomeIcon
        icon={faInfoCircle}
        className="movietile-info"
        onMouseEnter={() => setshowDescription("movie-tile-description-shown")}
        onMouseLeave={() => setshowDescription("movie-tile-description-hidden")}
        onTouchStart={() => setshowDescription("movie-tile-description-shown")}
      />
      <p
        className={showDescription}
        onMouseEnter={() => setshowDescription("movie-tile-description-shown")}
        onMouseLeave={() => setshowDescription("movie-tile-description-hidden")}
        onTouchStart={() => setshowDescription("movie-tile-description-shown")}
      >
        {props.movie[4]}
      </p>
      <img
        onClick={
          props.recommendation
            ? undefined
            : (e) => {
                props.increaseCardNumber();
                props.addPickedMovie(props.movie);
              }
        }
        src={props.movie[0]}
        alt={props.movie[1]}
        className={
          props.recommendation
            ? `movie-tile-img ${props.darkMode ? "dark-tile-img" : ""} recommendation`
            : `movie-tile-img ${props.darkMode ? "dark-tile-img" : ""}`
        }
      />
      <div className="movie-tile-title">{props.movie[1]}</div>
    </div>
  );
};
const mapStateToProps = (state) => ({ darkMode: state.darkMode });

const mapDispatchToProps = { increaseCardNumber, addPickedMovie };

export default connect(mapStateToProps, mapDispatchToProps)(MovieTile);
