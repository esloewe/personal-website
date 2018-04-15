import React from "react";
import "./styles/navigation.css";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            showMenuMobile: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        e.preventDefault();
        this.setState({ showMenuMobile: this.state.showMenuMobile });
    }

    render() {
        return (
            <div className="nav-container">
                <div>
                    <Link to="/esloewe">
                        <h1 id="logo">esloewe</h1>
                    </Link>
                </div>
                <div>
                    <i onClick={this.toggleMenu} className="fas fa-bars"></i>

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
