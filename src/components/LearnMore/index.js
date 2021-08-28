import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      Learn More
      <button>{<Link to="/">back</Link>}</button>
    </div>
  );
}

export default index;
