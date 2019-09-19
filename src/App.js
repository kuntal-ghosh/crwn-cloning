import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/homepage/homepage.component";
import ShowPage from "./Pages/show/show-page";

const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShowPage} />
      </Switch>
    </div>
  );
}

export default App;
