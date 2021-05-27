import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home1 from "./Home/Home1.js";
import Navbar from "./Navbar.js";
import App from "./Prediction/App.js"
import "./styles.css"

class App1 extends React.Component {
  render() {
    return (
      <Router>
        
        <div>
          <div><Navbar /></div>
          
          <div>
          <Switch>
            <Route exact path="/" component={Home1} />
            <Route exact path="/Prediction" component={App} />
            
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App1 />, document.getElementById("root"));
export default App1;