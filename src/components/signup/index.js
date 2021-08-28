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
    <div>
      <div className=" mx-64 w-full">
        <form className="w-full max-w-lg">
          Signup
          <div className="flex flex-wrap -mx-3 mb-6">
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
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                email
              </label>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                name="email"
                placeholder="re-enter password"
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
            onClick={(e) => handleSignup(e, name, password, email, confirm)}
            className="border border-solid rounded-full py-1 px-3"
          >
            Sign Up
          </button>
        </form>
      </div>

      <div>
        Already have an account?
        <button className="border border-solid bg-red-400 p-1 rounded-xl">
          <Link to="/login"> Log in</Link>
        </button>
      </div>
      <button className="border border-solid bg-red-400 p-1 rounded-xl">
        <Link to="/">back</Link>
      </button>
    </div>
  );
}

export default Index;
