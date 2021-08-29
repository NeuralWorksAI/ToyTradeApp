import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Index({ handleLogin }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setUser(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
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
      <div className="">
        <form
          className=" w-64 flex flex-col justify-center border  border-solid p-6 h-4/6 transform translate-x-4 translate-y-10 "
          style={{ backgroundColor: "#ffbf69" }}
        >
          <p className="uppercase block relative inset-x-0 top-0  transform -translate-y-8 text-xl text-white">
            Welcome back
          </p>

          <div>
            <div>
              <label className=" flex flex-col block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                email
              </label>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                name="email"
                placeholder="email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white"
              />
            </div>

            <div>
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
            <button
              type="submit"
              onClick={(e) => {
                handleLogin(e, user, password);
              }}
              className="border border-solid rounded-full py-1 px-3 transform translate-y-3 text-white transition-shadow  duration-300 ease-in-out uppercase hover:shadow-lg"
              style={{ backgroundColor: "#ff9f1c", borderColor: "#ff9f1c" }}
            >
              Log in
            </button>
          </div>
          <div className="transform translate-y-8  pb-4 block uppercase tracking-wide text-gray-700 text-xs font-bold">
            Don't have an account?
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
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Index;
