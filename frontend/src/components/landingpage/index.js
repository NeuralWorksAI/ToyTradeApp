import React from "react";
import { Link } from "react-router-dom";
function index() {
  return (
    <div>
      Hi! Welcome to {}!
      <div>
        Learn more
        <Link to="/learn">Learn More</Link>
      </div>
      <div>
        Login/Sign Up
        <Link to="/login">Login/Signup</Link>
      </div>
    </div>
  );
}

export default index;
