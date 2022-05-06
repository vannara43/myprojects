import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "./components/Axios";
import RandomMath from "./components/RandomMath";
import Gallery from "./components/Gallery";

function App() {
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="nav">
          <h1 className="col">Vannara Thong Portfolio</h1>
          <button className="btn btn-primary mx-3 my-2 d-flex align-self-end">
            <a href="/" className="text-light">
              Back to gallery
            </a>
          </button>
        </div>
        <hr />
      </div>

      <div className="container width-100 bg-light bg-gradient p-3">
        <Router>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/axios" element={<Axios />} />
            <Route path="/math" element={<RandomMath />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
