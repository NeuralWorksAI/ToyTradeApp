import React from "react";
import { Link } from "react-router-dom";
import teddy from "../images/dino.jpg";

function index() {
  return (
    <div className="flex max-h-full">
      <div
        style={{ backgroundImage: `url(${teddy})` }}
        className="w-full bg-cover h-screen "
      ></div>
      <div className="w-full h-screen ">
        <p className="text-3xl ">ToyRade</p>
        <div className="text-justify">
          <p className="p-3">
            Have toys you want to give away? No longer need them? Look no
            futher! Use Toyrade to donate and receive toys for your children~
          </p>
          <p className="p-3">
            Upload pictures of the toys, write a description for them, and post
            it in your community!
          </p>
          <p className="p-3 justify-center"> why? </p>
          <p className="p-3">
            {" "}
            Toys in your area can be readily traded and accessible to children
            in your area.{" "}
          </p>
          <p className="font-bold p-3">
            <strong>
              80% of all toys end up in landfills, incinerators or the ocean
            </strong>
          </p>
          <p className="p-3">
            {" "}
            to do our part in creating a circular economy for reusing toys,
            Toyrade creates a community for children to share and receive toys
            from others.
          </p>
        </div>
        <button className="border border-solid font-black bg-blue-400 rounded-xl p-1">
          {<Link to="/">back</Link>}
        </button>
      </div>
    </div>
  );
}

export default index;
