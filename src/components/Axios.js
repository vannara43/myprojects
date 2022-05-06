import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Get() {
  const [data, setData] = useState("");

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
  //updated 3:10
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      {data ? (
        data.map((data) => {
          return (
            <div className="data" key={data.id}>
              <h3>{data.name}</h3>
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
