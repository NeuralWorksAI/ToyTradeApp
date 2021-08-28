import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/index";
import data from "../data.js";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Index() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let arr = [];

  const handlePost = (e) => {};

  const handleSubmit = (e) => {};
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSearch = (e) => {
    e.persist();
    let filtered = data.filter((x) => x.toyCategory === e.target.value);
    console.log(data.filter);
  };

  const handleClick = () => {
    //span clicked
  };

  return (
    <div>
      <div className="p-0.5 border border-blue-200 text-lg bg-blue-400 text-white">
        <div className="flex  justify-around p-1 ">
          <button
            onClick={openModal}
            // className="
            //   rounded-full py-1 px-3
            //   bg-red-200
            //   text-white
            //   hover:bg-red-400 hover:border-transparent"
          >
            Post
          </button>
          <button>{<Link to="/profile">profile</Link>}</button>
          <Navbar />
        </div>
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
          <div className="flex flex-wrap ">
            {data.map((x) => {
              return (
                <div className="border border-solid rounded-xl justify-center max-w-xs p-3 m-1">
                  {" "}
                  <img
                    src={x.image}
                    alt={x.userId}
                    style={{
                      maxWidth: "10rem",
                      margin: "0 auto",
                      maxHeight: "40vh",
                    }}
                  />
                  <div
                    className="flex flex-col "
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <div className="text-left"> {x.title} </div>
                    <div className="flex flex-col ">
                      {x.description.length > 100
                        ? x.description.substring(0, 100) + "..."
                        : x.description}
                      <span
                        className="border border-solid rounded-full text-xs inset-x-0 bottom-0 "
                        style={{ maxWidth: "7rem" }}
                      >
                        {x.toyCategory}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        Donate a Toy
        <form>
          <label className=" flex flex-col block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            title
          </label>
          <input
            onChange={(e) => {
              handlePost(e);
            }}
            name="title"
            placeholder="title"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white"
          />
          <label className=" flex flex-col block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            description
          </label>
          <textarea
            onChange={(e) => {
              handlePost(e);
            }}
            name="description"
            placeholder="description"
            type="text-area"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white"
          />
          <div className="flex ">
            <div className="flex flex-col" style={{ width: "15rem" }}>
              <label className=" flex flex-col block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                image
              </label>
              <input name="image" type="file" />
            </div>
            <div>
              <label className=" flex flex-col block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                category
              </label>
              <div className="inline-block relative w-64">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Action Figures</option>
                  <option>Stuffed Animals</option>
                  <option>Cars</option>
                  <option>Radio Controlled</option>
                  <option>Construction Toys</option>
                  <option>Creative Toys</option>
                  <option>Dolls</option>
                  <option>Educational toys</option>
                  <option>Electronic toys</option>
                  <option>Generic</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 justify-around pt-6">
            <button
              onClick={closeModal}
              className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-solid px-2 py-2 rounded-full"
            >
              close
            </button>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-solid px-2 py-2 rounded-full"
            >
              submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Index;
