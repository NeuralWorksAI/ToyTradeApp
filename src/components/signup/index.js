import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Index({ handleSignup }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleChange = (e) => {
    // let confirm;
    // if (e.target.name === "confirm") {
    //   confirm = e.target.value;
    // }
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "password":
        // if (e.target.value !== confirm) {
        //   alert("please check that your password matches");
        // } else {
        setPassword(e.target.value);
        // }
        break;
      case "confirm":
        setConfirm(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        alert("something");
    }
  };

  return (
    <div
      className="flex justify-center bg-contain h-screen"
      style={{ backgroundColor: "#cbf3f0" }}
    >
      <div className=" mx-64 w-full">
        <div className="flex flex-col justify-center border  border-solid p-6 h-5/6 transform translate-x-6 translate-y-10">
          <form className="  h-5/6 " style={{ backgroundColor: "#ffbf69" }}>
            <p className="uppercase block relative inset-x-0 top-0  transform -translate-y-4 text-xl text-white">
              Sign up
            </p>
            <div className="flex flex-wrap -mx-3 mb-6 justify-center">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  name
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="name"
                  placeholder="name"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  email
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="email"
                  placeholder="enter email"
                  type="text"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="password"
                  placeholder="password"
                  type="password"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Re-Enter Password
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="confirm"
                  placeholder="re-enter password"
                  type="password"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={(e) => handleSignup(e, name, email, password, confirm)}
              className="border border-solid rounded-full py-1 px-3 transform -translate-y-3 text-white transition-shadow  duration-300 ease-in-out uppercase hover:shadow-lg"
              style={{ backgroundColor: "#ff9f1c", borderColor: "#ff9f1c" }}
            >
              Sign Up
            </button>
          </form>
          <div className="transform translate-y-4  pb-4 block uppercase tracking-wide text-gray-700 text-xs font-bold">
            Already have an account?
            <div className="flex justify-evenly pt-2 uppercase">
              <button
                className="border border-solid p-1 rounded-xl uppercase text-xs transition-shadow  duration-300 ease-in-out uppercase hover:shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Link to="/">back</Link>
              </button>
              <button
                className="border border-solid p-1 rounded-xl uppercase text-xs transition-shadow  duration-300 ease-in-out uppercase hover:shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Link to="/login">log in</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
