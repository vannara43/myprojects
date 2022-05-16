import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "./components/axios/Axios";
import RandomMath from "./components/randommath/RandomMath";
import FormApp from "./components/formapp/FormApp";
import PostCard from "./components/postcard/PostCard";
import ToDoMain from "./components/todolist/ToDoMain";
import ToDoMainV2 from "./components/todolistv2/MainTodo.js";
import Webpage from "./components/html/HtmlWeb"
import Parallax from "./components/parallax/ParallaxSite";


function App() {
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="nav">
          <a href="/" className="text-decoration-none display-6 mx-4 text-dark">
            <span className="" >
              My Projects
            </span>
          </a>
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
      <Router>
        <Routes>
          <Route path="/" element={<Parallax />} />
        </Routes>
      </Router>

      <div className="container width-100 p-3 justify-content-center">
        <Router>
          <Routes>
            <Route path="/myprojects" element={<PostCard />} />
            <Route path="/myprojects/axios" element={<Axios />} />
            <Route path="/myprojects/math" element={<RandomMath />} />
            <Route path="/myprojects/formapp" element={<FormApp />} />
            <Route path="/myprojects/todolist" element={<ToDoMain />} />
            <Route path="/myprojects/todolistv2" element={<ToDoMainV2 />} />
            <Route path="/myprojects/html" element={<Webpage />} />
            <Route path="/myprojects/parallax" element={<Parallax />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
