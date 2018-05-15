import React from "react";
import { Link } from "react-router-dom";
import "./styles/navigation.css";

const MobileNav = props => {
    return (
        <div className="nav-items-mobile-container">
            <ul className="nav-items nav-items-mobile">
                <Link to="/about" className="nav-link nav-link-mobile">
                    About
                </Link>
                <Link to="/projects" className="nav-link nav-link-mobile">
                    {" "}
                    Personal Projects
                </Link>
                <Link to="contact" className="nav-link nav-link-mobile">
                    Contact
                </Link>
            </ul>
        </div>
    );
};

export default MobileNav;
