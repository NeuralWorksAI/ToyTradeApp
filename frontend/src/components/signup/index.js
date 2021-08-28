import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Index({ handleSignup }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const handleChange = (e) => {
    // let confirm;
    // if (e.target.name === "confirm") {
    //   confirm = e.target.value;
    // }
    switch (e.target.name) {
      case "username":
        setUser(e.target.value);
        console.log("this is the user", user);
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
      default:
        alert("something");
    }
  };

  return (
    <div>
      Signup
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
            type="password"
          />
        </div>
        <div>
          Confirm Password:
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="confirm"
            placeholder="re-enter password"
            type="password"
          />
        </div>
        <button
          type="submit"
          onClick={(e) => handleSignup(e, user, password, confirm)}
        >
          Sign Up
        </button>
      </form>
      <div>
        Already have an account?
        <Link to="/login">Log in</Link>
      </div>
      <Link to="/">back</Link>
    </div>
  );
}

export default Index;
