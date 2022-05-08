import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "./components/Axios";
import RandomMath from "./components/RandomMath";
import FormApp from "./components/FormApp";
import PostCard from "./components/PostCard";
import ToDoMain from "./components/todolist/ToDoMain";

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
          <a href="/myprojects/" className=" text-light">
            <button className="btn btn-primary mx-3 my-2 d-flex align-self-end">
              Projects
            </button>
          </a>
        </div>
        <hr />
      </div>

      <div className="container width-100 bg-light bg-gradient p-3">
        <Router>
          <Routes>
            <Route path="/myprojects" element={<PostCard />} />
            <Route path="/myprojects/axios" element={<Axios />} />
            <Route path="/myprojects/math" element={<RandomMath />} />
            <Route path="/myprojects/formapp" element={<FormApp />} />
            <Route path="/myprojects/todolist" element={<ToDoMain />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
