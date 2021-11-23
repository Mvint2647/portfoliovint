import React from "react";
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom'
import Home from "./pages";
// import ExtraPage from "./pages/ExtraPage";

function App() {
  return (
    <Router>
      <Home />
      {/* <Switch> */}
        {/* <Route path="/" component={ Home }/> */}
        {/* <Route path="/extrapage" component={<ExtraPage/>}/> */}
      {/* </Switch> */}
    </Router>
  );
}

export default App;
