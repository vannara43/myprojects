import React from "react";
import PostCard from "./PostCard";
import { Outlet } from "react-router-dom";

function Gallery() {
  return (
    <div>
      <Outlet />
      <PostCard />
    </div>
  );
}

export default Gallery;
