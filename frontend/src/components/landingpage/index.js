import React from "react";
import { Link } from "react-router-dom";
function index() {
  return (
    <div>
      Hi! Welcome to {}!
      <div className="space-x-1.5">
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
