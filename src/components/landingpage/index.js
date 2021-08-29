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
        <button
          className="border border-solid uppercase  rounded-md p-1 text-white bg-green-400 hover:bg-green-700  hover:border-transparent"
          // style={{ backgroundColor: "#2EC4B6" }}
        >
          <Link to="/learn">Learn More</Link>
        </button>
        <button
          className="border border-solid uppercase  rounded-md p-1 text-white bg-yellow-400 hover:bg-yellow-300  hover:border-transparent"
          // style={{ backgroundColor: "#FF9F1C" }}
        >
          <Link to="/login">Login · Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default index;
