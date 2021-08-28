import React from "react";
import { Link } from "react-router-dom";
import teddy from "../images/dino.jpg";

function index() {
  return (
    <div className="flex max-h-full">
      <div
        style={{ backgroundImage: `url(${teddy})`, height: "100vh" }}
        className="w-full bg-cover max-w-sm "
      ></div>
      <div className="w-full">
        <p className="p-8">
          Have toys you want to give away? No longer need them? Look no futher!
          Use Toyrade to donate and receive toys for your children~
        </p>
        <p>
          Upload pictures of the toys, write a description for them, and post it
          in your community!
        </p>
        <p> why? </p>
        <p>
          {" "}
          Toys in your area can be readily traded and accessible to children in
          your area.{" "}
        </p>
        <p>
          <strong>
            80% of all toys end up in landfills, incinerators or the ocean
          </strong>
        </p>
        <p>
          {" "}
          to do our part in creating a circular economy for reusing toys,
          Toyrade creates a community for children to share and receive toys
          from others.
        </p>
        <button className="border border-solid bg-blue-400 rounded-xl p-1">
          {<Link to="/">back</Link>}
        </button>
      </div>
    </div>
  );
}

export default index;
