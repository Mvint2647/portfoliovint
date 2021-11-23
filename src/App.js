import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages";
// import ExtraPage from "./pages/ExtraPage";

function App() {
  return (
    <Router>
      {/* <Switch> */}
        <Route path="/" component={ Home }/>
        {/* <Route path="/extrapage" component={<ExtraPage/>}/> */}
      {/* </Switch> */}
    </Router>
  );
}

export default App;
