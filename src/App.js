import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Routes from "./routes/Router";
const App = () => {
  return (
    <div className="App ">
      <Router>
        <Nav />
        <div className="App-header">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
