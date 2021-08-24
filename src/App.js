import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import { connect } from "react-redux";

function App(props) {
  return (
    <>
      {props.darkMode ? (
        <div className="container-fluid dark-body" id="app-container">
          <Header />
          <Card />
        </div>
      ) : (
        <div className="container-fluid" id="app-container">
          <Header />
          <Card />
        </div>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({ darkMode: state.movies.darkMode });

export default connect(mapStateToProps)(App);
