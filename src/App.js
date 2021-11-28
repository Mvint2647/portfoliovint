import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages";

function App() {
  return (
    <Router>
      <Home />
       <Switch> 
       <Route exact path='/' exact={<Home/>}></Route> 
      </Switch> 
    </Router>
  );
}

export default App;
