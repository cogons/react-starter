import React, { Component } from "react";
import "./App.css";
import Home from "@/components/home";
import Signin from "@/components/signin";
import Signup from "@/components/signup";
import Mine from "@/components/mine";
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <nav>
            {window.isLogin?(<ul><li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tour/20180606">Home</Link>
              </li><li>
                <Link to="/mine">mine</Link>
              </li></ul>):(<ul><li>
                <Link to="/signin">signin</Link>
              </li>
              <li>
                <Link to="/signup">signup</Link>
              </li></ul>)}
              
              
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/mine" component={Mine} />
          <Route path="/tour/:date" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default App;
