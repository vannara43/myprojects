import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { v1 as uuidv1 } from "uuid";

function GetMath() {
  const [items, setItems] = useState([]);

  const getData = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
        user: "user" + uuidv1(),
      },
    ]);
    console.log("Getting new data", items);
  };

  let location = useLocation().pathname.slice(12);

  useEffect(() => {
    console.log(
      `%c Welcome to ${location.toUpperCase()}! `,
      `background-color:black; color:green;font-weight:bold;font-size:25px; padding: 15px;border:3px solid green;`
    );
  }, [location]);

  return (
    <div className="container">
      <div className="row">
        <div className="nav">
          <h3>Get Random Math Number</h3>
          <p className="btn btn-primary btn-sm mx-3" onClick={getData}>
            Get Random Generate Data
          </p>
        </div>
        {/* <hr /> */}
      </div>
      <div className="row">
        <div className="col col-lg-2 border">
          {items.map((item) => (
            <div className="col" key={item.id}>
              {item.value}
            </div>
          ))}
        </div>
        <div className="col col-lg-6 border">{JSON.stringify(items)}</div>
      </div>
    </div>
  );
}

export default GetMath;
