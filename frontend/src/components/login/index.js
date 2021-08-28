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
    <div className="flex justify-center">
      <div className=" w-44 flex flex-col justify-center">
        <form className="">
          Log in
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
              className="border border-solid rounded-full py-1 px-3"
            >
              Log in
            </button>
          </div>
        </form>

        <div>
          Don't have an account?
          <div className="flex justify-evenly">
            <button className="border border-solid bg-red-400 p-1 rounded-xl">
              <Link to="/">back</Link>
            </button>
            <button className="border border-solid bg-red-400 p-1 rounded-xl">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
