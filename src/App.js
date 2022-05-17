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
import Cardv1 from "./components/cardv1/Card";
import "./App.css"


function App() {
  return (
    <React.Fragment>
      <div className='pimg'>
        <div className='ptext'>
          <span className="border p-2 opacity-75 bg-dark" href="/">
            My Projects
          </span>
        </div>
        <div className='explore'>
          <a className="col opacity-100 btn text-light" href="#card">
            Explore
          </a>
        </div>
      </div>

      <section className='section shadow'>
        <h1 className='display-5 ' style={{ letterSpacing: "1px" }}>Welcome to my portfolio</h1>
        <p>I love to create and problem solve! I'm a magical being that is sometime refered as a "full-stack developer", my primary work is front-end. My abilities are to create nothing into existence.</p>
        <p>Check out my projects below.</p>
      </section>

      <div className="container-lg" id="card" style={{ marginTop: "20px" }}>
        <div className="nav">
          <a href="/myprojects/" className="text-decoration-none display-6 mx-4 text-dark">
            <span className="" >

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

      <div className="container-lg width-100 p-3 justify-content-center text-light">
        <Router>
          <Routes>
            <Route path="/myprojects" element={<PostCard />} />
            <Route path="/myprojects/axios" element={<Axios />} />
            <Route path="/myprojects/math" element={<RandomMath />} />
            <Route path="/myprojects/formapp" element={<FormApp />} />
            <Route path="/myprojects/todolist" element={<ToDoMain />} />
            <Route path="/myprojects/todolistv2" element={<ToDoMainV2 />} />
            <Route path="/myprojects/parallax" element={<Parallax />} />
            <Route path="/myprojects/html" element={<Webpage />} />
            <Route path="/myprojects/cardv1" element={<Cardv1 />} />
          </Routes>
        </Router>
      </div>
      <div className="text-center p-3">
        <a href="/myprojects/#card" className='btn btn-outline-dark border border-dark' style={{ boxShadow: "0px 0px 2px 0px #001cff" }}>Return to top</a><br />
      </div>
    </React.Fragment>
  );
}

export default App;
