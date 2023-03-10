import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import Login from "./components/pages/Login";
import ProfileUpdate from "./components/pages/Profile/ProfileUpdate";
import Welcome from "./components/pages/Welcome";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/updateprofile">
          <ProfileUpdate/>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
