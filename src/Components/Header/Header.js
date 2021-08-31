import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { toggleDarkMode, restartFinderFunction } from "../../Redux/Actions/movieListActions";

function Header(props) {
  return (
    <div className={`row align-items-center ${props.darkMode ? "dark" : ""}`} id="header-row">
      <div className={`col-9 ${props.darkMode ? "dark" : ""}`} id="header-col">
        <span onClick={() => props.restartFinderFunction()}>
          <FontAwesomeIcon
            icon={faFilm}
            id="header-icon"
            className={`${props.darkMode ? "dark" : ""}`}
          />
          Movie Finder
        </span>
      </div>
      <div className="col-3">
        <div id="dark-mode-title">Dark Mode</div>
        <label className="switch">
          <input type="checkbox" name="dark-mode-checkbox" onClick={() => props.toggleDarkMode()} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ darkMode: state.darkMode });

const mapDispatchToProps = { toggleDarkMode, restartFinderFunction };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
