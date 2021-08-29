import "./style.scss";
import Homepage from "./components/homepage/index";
import Login from "./components/login/index";
import Signup from "./components/signup/index";
import Landing from "./components/landingpage/index";
import LearnMore from "./components/LearnMore/index";
import Profile from "./components/profile/index";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function App() {
  let history = useHistory();
  const [userID, setUserID] = useState("");
  const [data, setData] = useState([]);
  const api = "https://toy-trader.herokuapp.com/api";

  const handleLogin = (e, email, password) => {
    e.preventDefault();
    fetch(api + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => handleAuthResponse(data))
      .catch((error) => alert(error));
  };

  const handleSignup = (e, name, email, password, confirm) => {
    e.preventDefault();
    console.log(name, password, confirm, email);
    fetch("https://toy-trader.herokuapp.com/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password2: confirm,
      }),
    })
      .then((response) => response.json())
      .then((data) => handleAuthResponse(data))

      .catch(console.log);
  };

  const handleAuthResponse = (data) => {
    console.log(data);
    if (data.token) {
      const token = data.token;
      localStorage.setItem("token", token);
      setUserID(data.id);
      history.push("/dashboard");
    } else if (data.name) {
      history.push("/dashboard");
      setUserID(data._id);
    }
  };

  const postSubmit = (e, title, description, image, category) => {
    e.preventDefault();
    const token = localStorage.token;

    fetch("https://toy-trader.herokuapp.com/api/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: userID,
        title: title,
        description: description,
        image: image,
        category: category,
      }),
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  const authPost = (data) => {};

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Landing />;
          }}
        />
        <Route
          exact
          path="/learn"
          render={() => {
            return <LearnMore />;
          }}
        />
        <Route
          exact
          path="/login"
          render={() => {
            return <Login handleLogin={handleLogin} />;
          }}
        />
        <Route
          exact
          path="/signup"
          render={() => {
            return <Signup handleSignup={handleSignup} />;
          }}
        />
        {/* {!localStorage.token && <Redirect to="/" />} */}

        <Route
          exact
          path="/dashboard"
          render={() => {
            return <Homepage postSubmit={postSubmit} realData={data} />;
          }}
        />
        <Route
          exact
          path="/profile"
          render={() => {
            return <Profile />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
