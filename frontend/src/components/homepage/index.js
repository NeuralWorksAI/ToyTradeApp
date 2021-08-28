import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/index";
import "./homepage.css";

function Index() {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      homepage
      <div className="homeParent">
        <div className="query">
          <h2>query</h2>
          <div>filter</div>
          <div>categories</div>
          <div>price range</div>
        </div>
        <div className="mainContent">
          main content
          <div className="search">
            search bar
            <input
              onChange={(e) => {
                handleSearch(e);
              }}
            />
          </div>
          <div className="sort">
            sort
            <span>New</span>
            <span>Price</span>
          </div>
          <div>body **filled with cards (map through an api)</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
