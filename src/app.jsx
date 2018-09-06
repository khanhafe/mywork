import React from "react";
import Service from "./components/service.jsx";
import Home from "./components/home.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/service" component={Service} />
        </div>
      </Router>
    );
  }
}

export default App;
