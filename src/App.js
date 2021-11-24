import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages";
import ExtraPage from "./pages/ExtraPage";

function App() {
  return (
    <Router>
      <Home />
       <Switch> 
       <Route exact path='/' element={<Home/>}></Route> 
       <Route exact path='/extrapage' element={<ExtraPage/>}></Route> 
      </Switch> 
    </Router>
  );
}

export default App;
