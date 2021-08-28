import "./App.css";
import Homepage from "./components/homepage/index";
import Login from "./components/login/index";
import Signup from "./components/signup/index";
import Landing from "./components/landingpage/index";
import LearnMore from "./components/LearnMore/index";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
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
            return <Login />;
          }}
        />
        <Route
          exact
          path="/signup"
          render={() => {
            return <Signup />;
          }}
        />
        {/* {!localStorage.token && <Redirect to="/login" />} */}
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
