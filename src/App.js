import "./style.scss";
import Homepage from "./components/homepage/index";
import Login from "./components/login/index";
import Signup from "./components/signup/index";
import Landing from "./components/landingpage/index";
import LearnMore from "./components/LearnMore/index";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const api = "https://toy-trader.herokuapp.com/users";
  useEffect(() => {
    const token = localStorage.token;
    if (token) {
      console.log("this works!");
    }
  }, []);

  const handleLogin = (e, email, password) => {
    e.preventDefault();
    /* this works */
    // fetch(api + "/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(loginInfo),
    // })
    //   .then((response) => response.json())
    //   .then((data) => this.handleAuthResponse(data))
    //   .catch((error) => alert(error));
  };

  const handleSignup = (e, name, password, confirm, email) => {
    e.preventDefault();

    fetch(api + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
        password2: confirm,
      }),
    })
      .then((response) => response.json())
      .then((data) => handleAuthResponse(data))
      .catch(console.log);
  };

  const handleAuthResponse = (data) => {
    console.log(data);
    // if (data.username) {
    //   const { username, id, token } = data;
    //   this.setState({
    //     user: {
    //       username,
    //       id,
    //     },
    //     error: null,
    //   })
    //   localStorage.setItem('token', token)
    //   this.props.history.push('/notes')
    //   // console.log(this.props.history.push("/notes"))
    //   // console.log(this.props) im not sure what to push to the history of props?
    // } else if (data.error) {
    //   this.setState({
    //     error: data.error
    //   })
    // }
  };

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
            return <Homepage />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
