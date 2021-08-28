import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { toggleDarkMode } from "../../Redux/Actions/movieListActions";

function Header(props) {
  return (
    <>
      {props.darkMode ? (
        <div className="row align-items-center dark" id="header-row">
          <div className="col-9 dark" id="header-col">
            <FontAwesomeIcon icon={faFilm} id="header-icon" />
            Movie Finder
          </div>
          <div className="col-3">
            <div id="dark-mode-title">Dark Mode</div>
            <label className="switch">
              <input type="checkbox" onClick={() => props.toggleDarkMode()} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      ) : (
        <div className="row align-items-center" id="header-row">
          <div className="col-9" id="header-col">
            <FontAwesomeIcon icon={faFilm} id="header-icon" />
            Movie Finder
          </div>
          <div className="col-3">
            <div id="dark-mode-title">Dark Mode</div>
            <label className="switch">
              <input type="checkbox" onClick={() => props.toggleDarkMode()} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({ darkMode: state.movies.darkMode });

const mapDispatchToProps = { toggleDarkMode };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
