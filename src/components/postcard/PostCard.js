import React from "react";
import Data from "./data.json"
import { Link } from "react-router-dom";

function PostCard() {
  console.table(Data)
  return (
    <div>
      <div className="row">

        {Data.map((data, index)=>{
          return (
          <div
          className="card shadow m-3 p-3 rounded"
          style={{ width: "18rem", height: "24rem" }}
          key={index}
        >
          <img
            src={data.img}
            className="card-img-top rounded border"
            style={{ height: "10rem" }}
            alt={data.title}
          />
          <div className="card-body">
            <h5 className="card-title lead text-center">{data.title}</h5>
            <p className="card-text small" style={{ height: "5rem" }}>
              {data.description}
            </p>
            <div className="text-end ">
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
