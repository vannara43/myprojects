import React from "react";
import { Link } from "react-router-dom";

function PostCard() {
  return (
    <div className="">
      <div className="row">
        <div
          className="card shadow mx-3 p-3 rounded"
          style={{ width: "18rem", height: "24rem" }}
        >
          <img
            src="https://i.pinimg.com/736x/69/95/38/6995383b37b2d3b859ae480e698b8f1b--programming-languages-computer-science.jpg"
            className="card-img-top rounded border"
            style={{ height: "10rem" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title lead text-center">Get Axios Call</h5>
            <p className="card-text small" style={{ height: "5rem" }}>
              Axios is the method to make HTTP call requests using the Axios
              library.
            </p>
            <div className="text-end ">
              <Link
                to="/myprojects/axios"
                className="btn btn-primary rounded-pill"
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card shadow mx-3 p-3 rounded"
          style={{ width: "18rem", height: "24rem" }}
        >
          <img
            src="https://leedsunilibrary.files.wordpress.com/2020/04/math-1143869_1280.jpg"
            className="card-img-top rounded border"
            style={{ height: "10rem" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-center lead">Number Generator</h5>
            <p className="card-text small" style={{ height: "5rem" }}>
              Generate random number with just a click of a button. Utilize map
              and list to display text.
            </p>
            <div className="text-end ">
              <Link
                to="/myprojects/math"
                className="btn btn-primary rounded-pill"
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card shadow mx-3 p-3 rounded border"
          style={{ width: "18rem", height: "24rem" }}
        >
          <img
            src="https://blog.sheetgo.com/wp-content/uploads/2021/09/google-forms-blog-images-01.png"
            className="card-img-top rounded"
            style={{ height: "10rem" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-center lead">Form Application</h5>
            <p className="card-text small" style={{ height: "5rem" }}>
              Created a form that is able to take in values.
            </p>

            <div className="text-end ">
              <Link
                to="/myprojects/formapp"
                className="btn btn-primary rounded-pill"
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card shadow mx-3 p-3 opacity-50 rounded border bg-light"
          style={{ width: "18rem", height: "24rem" }}
        >
          <table className="col ">
            <td className="card-title text-center align-middle display-1">
              {" "}
              +
            </td>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
