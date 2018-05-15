import React from "react";
import "./styles/navigation.css";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import MobileNav from "./mobileNav";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        e.preventDefault();
        this.setState({ toggleMenu: !this.state.toggleMenu });
    }

    render() {
        return (
            <div className="wrapper">
                {window.innerWidth > 750 ? (
                    <div>
                        <div className="nav-container">
                            <div>
                                <Link to="/">
                                    <h1 className="logo">esloewe</h1>
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
                    </div>
                ) : (
                    <div>
                        <MediaQuery maxDeviceWidth={750}>
                            <div className="nav-container">
                                <Link to="/">
                                    <h1 className="logo mobile-logo">
                                        esloewe
                                    </h1>
                                </Link>
                                <i
                                    className="fas fa-bars"
                                    onClick={this.toggleMenu}
                                />
                            </div>
                            <div>
                                {this.state.toggleMenu && (
                                    <div>
                                        <MobileNav />
                                    </div>
                                )}
                            </div>
                        </MediaQuery>
                    </div>
                )}
            </div>
        );
    }
}
