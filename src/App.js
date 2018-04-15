import React, { Component } from "react";
import "./styles/App.css";
import Navigation from "./navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainInfo from "./mainInfo";
import Contact from "./contact";
import PersonalProjects from "./personalProjects";
import About from "./about";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={MainInfo} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={PersonalProjects} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
