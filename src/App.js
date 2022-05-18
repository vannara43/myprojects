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
import Menu from "./components/menu/Menu";
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
        <h1 className='display-5 ' style={{ letterSpacing: "1px" }} id='about'>"It's only going to get bigger"</h1>
        <p className="container col-lg-10 small">Welcome to my portfolio! I love to create and problem solve. I'm a magical being that is refered as a "full-stack developer", my primary work is front-end. My abilities are to create nothing into existence. I'm looking for an opportunity for a front-end position. I want to be in an environment that supports creativity and grow as a developer. I can code React, JavaScript, Bootstrap, CSS, HTML. I am also familiar with using Node and Git as it is a daily thing for me to utilize. If this is a plus, I have experience with RESTful APIs and SQL Databases. I'm a machine when it comes to coding because I enjoy it so much. I hope to be on your team!</p>
        <p>Check out my projects below. Everything is made from scratch!<p>Here is a recipe for baked potatoes: Baked Potato, sour cream, cheese, bacon bits,and green onion.</p></p>
      </section>

      <div className="container" id="card" style={{ marginTop: "20px", alignItems: 'center', left: '50%' }}>
        <div className="nav text-center justify-content-center">
          <input
            type="text"
            className="col-lg-6"
            placeholder="Search a project"
          />
          <a href="/myprojects/" className="text-light">
            <button className="btn-lg btn-primary mx-3">
              Projects
            </button>
          </a>
        </div>
        <hr />
      </div>

      <div className="menubody" style={{ position: 'fixed', top: '40%', zIndex: "2", fontSize: '5px' }}>
        <ul className="">
          <li style={{ '--clr': '#00ade1' }}>
            <a href="# " data-text="&nbsp;&nbsp;Home">&nbsp;&nbsp;Home&nbsp;</a>
          </li>
          <li style={{ '--clr': "#ff1413" }}>
            <a href="#about" data-text="&nbsp;&nbsp;About">&nbsp;&nbsp;About&nbsp;</a>
          </li>
          <li style={{ '--clr': "#ffdd1c" }}>
            <a href="#experience" data-text="&nbsp;&nbsp;Work">&nbsp;&nbsp;Work&nbsp;</a>
          </li>
          <li style={{ '--clr': "#00ff00" }}>
            <a href="#contact" data-text="&nbsp;&nbsp;Contact">&nbsp;&nbsp;Contact&nbsp;</a>
          </li>
        </ul>
      </div>

      <div className="container-lg p-3 justify-content-center text-light">
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
            <Route path="/myprojects/menu" element={<Menu />} />
          </Routes>
        </Router>
      </div>

      <section className='section shadow'>
        <h1 className='display-5 ' style={{ letterSpacing: "1px" }} id="experience">Work Experience</h1> <h3>Interrogas | Full-time | Oct 2021 - May (Current) | 8 mos</h3>
        <div className="row">
          <div className="container col-lg-10 ">
            <p className="small">● I have utilized SQL, ADO.NET, and React for this project.
              ● Created a database, use of framework, and front-end design to accomplish this work.
              ● Created data tables and stored procedures with SQL Server Management
              Studio(SSMS).
              ● Designed and managed relational databases, stored procedures, foreign key
              constraints, sub-queries and table joins with SQL Server Management Studio(SSMS).
              ● Designed and Implemented RESTful API's using .NET Core, ADO.NET, in Visual Studio
              2022
              ● Utilize UI to makes calls to the built API's to allow users to create and manage data
              ● Utilize Bootstrap along with React JS that allows users to complete content management
              procedures.
              ● Built a responsive application using React.js
              ● Conducted code reviews and merged pull requests using Git and GitHub. Provided
              constructive and meaningful feedback, focused on strengthening both individual and
              AGILE development team product knowledge
            </p>
          </div>
        </div>
      </section>
      <section className='section shadow'>
        <h3 className='display-6' style={{ letterSpacing: "1px" }} id="contact">Contact me</h3>
        <div className="row justify-content-center text-center">
          <a href="https://www.linkedin.com/in/vannarathong/">LinkedIn</a><a href="https://github.com/vannara43">Github</a><p>Call: 951-290-7279</p></div>
      </section>

      <div className="text-center p-3">
        <a href="/myprojects/#card" className='btn btn-outline-dark border border-dark' style={{ boxShadow: "0px 0px 2px 0px #001cff" }}>Return to top</a><br />
      </div>


    </React.Fragment >
  );
}

export default App;
