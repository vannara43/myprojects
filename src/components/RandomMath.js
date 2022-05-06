import React, { useState } from "react";

function GetMath() {
  const [items, setItems] = useState([]);

  const getData = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
        user:
          "user" +
          Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10),
      },
    ]);
    console.log("Getting new data", items);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="nav">
          <h3>Get Random Math Number</h3>
          <button className="btn btn-primary btn-sm mx-3" onClick={getData}>
            Get Data
          </button>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col col-lg-2">
          {items.map((item) => (
            <div className="col" key={item.id}>
              {`${item.user}: `}
              {item.value}
            </div>
          ))}
        </div>
        <div className="col col-lg-2">{JSON.stringify(items)}</div>
      </div>
    </div>
  );
}

export default GetMath;
