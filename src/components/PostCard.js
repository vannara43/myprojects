import React from "react";

function PostCard() {
  return (
    <div className="">
      <div className="row">
        <div
          className="card shadow mx-3 p-3 rounded"
          style={{ width: "18rem" }}
        >
          <img
            src="https://i.pinimg.com/736x/69/95/38/6995383b37b2d3b859ae480e698b8f1b--programming-languages-computer-science.jpg"
            className="card-img-top rounded"
            style={{ height: "100%" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Get Axios Call</h5>
            <p className="card-text">
              Axios is the method to make HTTP call requests using the Axios
              library.
            </p>
            <a href="/axios" className="btn btn-primary">
              Check it out
            </a>
          </div>
        </div>

        <div
          className="card shadow mx-3 p-3 rounded"
          style={{ width: "18rem" }}
        >
          <img
            src="https://leedsunilibrary.files.wordpress.com/2020/04/math-1143869_1280.jpg"
            className="card-img-top rounded"
            style={{ height: "100%" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Number Generator</h5>
            <p className="card-text">
              Generate random number with just a click of a button. Utilize map
              and list to display text.
            </p>
            <a href="/math" className="btn btn-primary">
              Check it out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
