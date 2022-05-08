import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Typography from "@material-ui/core/Typography";

function Get() {
  const [data, setData] = useState("");
  const location = useLocation().pathname.slice(12);

  const getAllData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log(
      `%c Welcome to ${location.toUpperCase()}! `,
      `background-color:black; color:green;font-weight:bold;font-size:25px; padding: 15px;border:3px solid green;`
    );
    getAllData();
  }, []);

  return (
    <div>
      {data ? (
        data.map((data) => {
          return (
            <div className="data" key={data.id}>
              <p className="btn btn-outline-primary shadow nav-link">
                <Typography>{`Name: ${data.name}`}</Typography>
                <Typography>{`Site: ${data.website}`}</Typography>
              </p>
            </div>
          );
        })
      ) : (
        <h3>No data yet</h3>
      )}
    </div>
  );
}

export default Get;
