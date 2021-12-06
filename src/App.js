import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Home" component={Home} exact />
        <Route path="/contactpage" component={ContactPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
