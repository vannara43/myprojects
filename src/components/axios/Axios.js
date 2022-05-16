import React, { useState, useEffect } from "react";
import axios from "axios";
import PostData from './data.json'
import { useLocation } from "react-router";
import Typography from "@material-ui/core/Typography";

function Get() {
  const [data, setData] = useState("");
  const location = useLocation().pathname.slice(12);

//create object
  const [myObj] = useState({
    "name": "Homer Simpson",
    "site": "https://simpsonswiki.com/"
  });
  

  const getAllData = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    // .get("https://www.cleardb.com/service/1.0/api")
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
    //push the object to your array
  PostData.push( myObj );
  }, [location,myObj]);

  return (
    <div className="row">
      <div className="col">
        <h3 className="text-center">From local .json</h3>
        {PostData? (PostData.map((post, index)=>{
          return (
            <div key={index}>
              <p className="border border-primary border-1 rounded-pill p-2 m-2 text-center bg-light opacity-50 shadow">
                {"ID:" + index}{JSON.stringify(post)}
                </p>
            </div>
          )
        })):(
          <h3>No more data</h3>
        )}

      </div>
        
        <div className="col">
          <h3 className="text-center">From API</h3>
        {data ? (
          data.map((data) => {
            return (
              <div className="data" key={data.id}>
                <p className="border border-primary border-1 rounded-pill p-2 m-2 text-center bg-light opacity-50 shadow">
                  <Typography>{`Name: ${data.name}`} | {`Site: ${data.website}`}</Typography>
                  <Typography></Typography>
                </p>
              </div>
            );
          })
        ) : (
          <h3>No data yet</h3>
        )}
      </div>
<hr/>
    </div>
  );
}

export default Get;
