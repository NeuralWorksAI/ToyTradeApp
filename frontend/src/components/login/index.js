import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Index({ handleLogin }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
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
    <div>
      Login
      <form>
        <div>
          Username:
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="username"
            placeholder="enter username"
          />
        </div>
        <div>
          Password:
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="password"
            placeholder="enter password"
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            handleLogin(e, user, password);
          }}
        >
          Login
        </button>
      </form>
      <div>
        Don't have an account?
        <Link to="/signup">Sign Up</Link>
      </div>
      <Link to="/">back</Link>
    </div>
  );
}

export default Index;
