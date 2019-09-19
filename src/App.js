import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./HomePage/homepage.component";

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
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
