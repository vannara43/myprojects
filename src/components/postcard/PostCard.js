import React from "react";
import Data from "./data.json"
import { Link } from "react-router-dom";
import "./postcard.css"

function PostCard() {
  console.table(Data)
  return (
    <div className="pccontainer">
      <div className="row justify-content-center text-dark">
        {Data.map((data, index) => {
          return (
            <div
              className="pccard shadow m-3 p-3 rounded my-5"
              // style={{ width: "18rem", height: "24rem", transition: "0.5s ease-in-out" }}
              key={index}
            >
              <div className="pcimgBx">
                <span className="badge bg-info text-dark position-absolute">{data.status}</span>
                <img
                  height="150px"
                  src={data.img}
                  className=" card-img-top rounded border"
                  style={{}}
                  alt={data.title}
                />
              </div>
              <div className="pccontent">
                <h5 className="card-title lead text-center">{data.title}</h5>
                <p className="card-text small" style={{ height: "5rem" }}>
                  {data.description}
                </p>

                <div className="text-center ">
                  <Link
                    to={data.link}
                    className="btn btn-primary rounded-pill"
                  >
                    Check it out
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default PostCard;
