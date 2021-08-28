import React from "react";
import { Link } from "react-router-dom";
import background from "../images/background.png";

function index() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="space-x-10 absolute inset-x-0 bottom-0 h-36 ">
        <button className="border border-solid bg-red-400 rounded-xl p-1">
          <Link to="/learn">Learn More</Link>
        </button>
        <button className="border border-solid bg-blue-400 rounded-xl p-1">
          <Link to="/login">Login/Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default index;
