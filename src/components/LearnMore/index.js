import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      Have toys you want to give away? No longer need them? Look no futher! Use
      Toyrade to donate and receive toys for your children~
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
      <p>80% of all toys end up in landfills, incinerators or the ocean</p>
      <p>
        {" "}
        to do our part in creating a circular economy for reusing toys, Toyrade
        creates a community for children to share and receive toys from others.
      </p>
      <button>{<Link to="/">back</Link>}</button>
    </div>
  );
}

export default index;
