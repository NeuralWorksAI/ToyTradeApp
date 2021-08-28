import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Index() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUser(e.target.value);
        console.log("this is the user", user);
        break;
      case "password":
        setPassword(e.target.value);
        console.log("this is the password", password);
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
        <button>Login</button>
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
