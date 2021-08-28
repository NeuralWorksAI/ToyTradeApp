import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/index";
// import "./homepage.css";

function Index() {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    //span clicked
  };

  return (
    <div>
      <div className="flex flex-row-reverse p-0.5 border border-blue-200 text-lg bg-blue-400 text-white">
        <Navbar />
      </div>
      homepage
      <div className="flex justify-center pt-5 w-screen space-x-5 ">
        <div className="p-10 bg-yellow-200 text-yellow-700 w-4/12 rounded-xl ">
          <div>
            <h2>query</h2>
            <div>filter</div>
            <div className="flex flex-col">
              categories
              <div className="mt-2 flex flex-col">
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className="ml-2">Playsets</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className="ml-2">Stuffed Animals</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className="ml-2">Dolls</span>
                </label>
              </div>
            </div>
            <div>price range</div>
          </div>
        </div>
        <div className="flex flex-col border border-solid p-5">
          <div>
            <input
              className=" rounded-lg bg-gray-50 w-full focus:outline-none
              "
              placeholder="   search"
              onChange={(e) => {
                handleSearch(e);
              }}
            />
          </div>
          <div className="p-4 space-x-2 ">
            <span
              onClick={handleClick}
              className="
              
              rounded-full py-1 px-3
              bg-red-200
              text-white
              hover:bg-red-400 hover:border-transparent"
            >
              new
            </span>
            <span
              onClick={handleClick}
              className="
              rounded-full py-1 px-3
              bg-red-200
              text-white
              hover:bg-red-400 hover:border-transparent"
            >
              price
            </span>
          </div>
          <div>body **filled with cards (map through an api)</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
