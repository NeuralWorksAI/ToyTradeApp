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
  const handleSignUp = (e, user, password) => {
    e.preventDefault();
    // fetch(api + "/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ user: user, password: password }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => this.handleAuthResponse(data))
    //   .catch(console.log);
  };

  const handleAuthResponse = (data) => {
    //confirm that the data is data.user, which is true, then
    //push the user to the /dashboard route
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
          />
        </div>
        <div>
          Confirm Password:
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="password"
            placeholder="re-enter password"
          />
        </div>
        <button onClick={(e) => handleSignUp(e, user, password)}>
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
