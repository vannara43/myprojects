import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "./components/Axios";
import RandomMath from "./components/RandomMath";
import Gallery from "./components/Gallery";
import FormApp from "./components/FormApp";

function App() {
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="nav">
          <h1 className="display-6 col col-lg-3" href="/">
            My Projects
          </h1>
          <input
            type="text"
            className="col form-control"
            placeholder="Search a project"
          />
          <button className="btn btn-primary mx-3 my-2 d-flex align-self-end">
            <a href="/myprojects/gallery" className="text-light">
              Back to gallery
            </a>
          </button>
        </div>
        <hr />
      </div>

      <div className="container width-100 bg-light bg-gradient p-3">
        <Router>
          <Routes>
            <Route path="myprojects">
              <Route path="gallery" element={<Gallery />} />
              <Route path="axios" element={<Axios />} />
              <Route path="math" element={<RandomMath />} />
              <Route path="formapp" element={<FormApp />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
