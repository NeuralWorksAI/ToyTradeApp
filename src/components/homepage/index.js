import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../navbar/index";
import data from "../data.js";
import Modal from "react-modal";
import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { useHistory } from "react-router-dom";

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

function Index({ postSubmit, realData }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [toys, setToys] = useState([]);
  let history = useHistory();

  let arr = [];

  const handlePost = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        setImage("this is an image");
        break;
      case "description":
        setDescription(e.target.value);
        break;

      case "image":
        setImage("image");
        break;
      case "category":
        setCategory(e.target.value);
        break;
      default:
        alert("hello");
    }
  };

  const setSelect = (e) => {
    setCategory(e.target.value);
  };
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

  const fetchToys = () => {
    fetch("https://toy-trader.herokuapp.com/api/posts/toys", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setToys(data));
  };

  const sortToys = (toys) => {
    return toys.map((x) => (
      <div
        className=" border border-solid rounded-md justify-center p-3 m-1 "
        style={{ maxWidth: "10rem" }}
      >
        {" "}
        <img
          src={x.image}
          alt={x.image}
          style={{
            margin: "0 auto",
            maxHeight: "20vh",
          }}
          className="w-max"
        />
        <div
          className="flex flex-col "
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <div className="text-left uppercase text-sm font-bold">
            {" "}
            {x.title}{" "}
          </div>
          <div className="flex flex-col text-xs ">
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
    ));
  };
  fetchToys();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <div
        className="p-0.5 border border-blue-200 text-base text-white"
        style={{ backgroundColor: "#FFBF69" }}
      >
        <div className="flex justify-around ">
          <button onClick={openModal} className="w-2/4">
            <CgMathPlus className="w-2/4" style={{ height: "40px" }} />
          </button>
          <div className=" pt-1 justify-center my-1 flex space-x-5 font-thin text-base uppercase">
            <Link to="/profile" className="font-thin">
              profile
            </Link>
            <div onClick={handleLogout}>log out</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen space-x-5  m-2">
        <div
          className=" text-yellow-700 w-7/12 "
          style={{ backgroundColor: "#CBF3F0" }}
        >
          <div className="justify-center content-center mx-10 ">
            <div className="uppercase text-lg  pt-6 justify-center content-center  ">
              <p className="font-bold ">categories</p>
              <div className="mt-2 flex flex-col ">
                <label className="inline-flex items-center  ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className=" ml-2 uppercase text-sm ">
                    {" "}
                    action-figures
                  </span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className=" ml-2 uppercase text-sm ">
                    stuffed-animals
                  </span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className=" ml-2 uppercase text-sm ">cars</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className=" ml-2 uppercase text-sm ">
                    {" "}
                    radio-controlled
                  </span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className=" ml-2 uppercase text-sm ">
                    {" "}
                    construction-toys
                  </span>
                </label>

                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className=" ml-2 uppercase text-sm ">
                    {" "}
                    creative-toys
                  </span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className=" ml-2 uppercase text-sm ">dolls</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className=" ml-2 uppercase text-sm ">
                    {" "}
                    educational-toys
                  </span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className=" ml-2 uppercase text-sm ">
                    {" "}
                    electronic-toys
                  </span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="accountType"
                    value="busines"
                  />
                  <span className=" ml-2 uppercase text-sm "> generic</span>
                </label>
              </div>
            </div>
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
          <div className="flex flex-wrap justify-center ">
            {/* {realData.length === 0 ?   */}
            {sortToys(data)}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
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
            {/* <div className="flex flex-col" style={{ width: "15rem" }}>
              <label className=" flex flex-col block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                image
              </label>
              <input name="image" type="file" onChange={(e) => handlePost(e)} />
            </div> */}
            <div>
              <label className=" flex flex-col block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                category
              </label>
              <div className="inline-block relative w-64">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="category"
                  onChange={(e) => setSelect(e)}
                  value={category}
                  placeholder="category"
                >
                  <option value="" disabled>
                    Select your option
                  </option>
                  <option value="action-figures">action-figures</option>
                  <option value="stuffed-animals">stuffed-animals</option>
                  <option value="cars">cars</option>
                  <option value="radio-controlled">radio-controlled</option>
                  <option value="construction-toys">construction-toys</option>
                  <option value="creative-toys">creative-toys</option>
                  <option value="dolls">dolls</option>
                  <option value="educational-toys">educational-toys</option>
                  <option value="electronic-toys">electronic-toys</option>
                  <option value="generic">generic</option>
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
                postSubmit(e, title, description, image, category);
              }}
              className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border border-solid px-2 py-2 rounded-full"
              type="submit"
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
