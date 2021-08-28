import React from "react";
import "./homepage.css";

function Index() {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div>
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
          <div>body</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
