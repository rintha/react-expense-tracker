import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import AddExpenses from "./components/pages/Expenses/AddExpenses";
import Login from "./components/pages/Login";
import ProfileUpdate from "./components/pages/Profile/ProfileUpdate";
import ResetPwd from "./components/pages/ResetPwd";
import Welcome from "./components/pages/Welcome";
import { ExpenseContextProvider } from "./components/Store/expense-context";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ExpenseContextProvider>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/expenses">
            <AddExpenses />
          </Route>
          <Route path="/updateprofile">
            <ProfileUpdate />
          </Route>
          <Route path="/resetpassword">
            <ResetPwd />
          </Route>
        </Switch>
      </ExpenseContextProvider>
    </React.Fragment>
  );
}

export default App;
