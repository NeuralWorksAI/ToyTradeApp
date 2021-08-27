import "./App.css";
import Homepage from "./components/homepage/index";
import Login from "./components/login/index";
import Signup from "./components/signup/index";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/login"
          render={() => {
            return <Login />;
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return <Homepage />;
          }}
        />

        <Route
          exact
          path="/signup"
          render={() => {
            return <Signup />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
