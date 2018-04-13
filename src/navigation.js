import React from "react";
import "./styles/navigation.css";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <div>
                    <Link to="/">
                        <h1 id="logo">esloewe</h1>
                    </Link>
                </div>
                <div>
                    <ul className="nav-items">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                        <Link to="/projects" className="nav-link">
                            {" "}
                            Personal Projects
                        </Link>
                        <Link to="contact" className="nav-link">
                            Contact
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}
