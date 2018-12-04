import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Chat from "./chat";
import Nav from "./nav";
import NotFound from "./404";

const App = () => (
  <div>
    <Nav />
    <div className="container" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/chat" component={Chat} />
      <Route component={NotFound}/>
    </Switch>
  </div>
);

export default App;
