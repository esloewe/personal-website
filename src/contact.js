import React from "react";
import "./styles/contact.css";

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact-container">
                <h1 className="titles">Contact me</h1>
                <div id="info-contact">
                    <h2>
                        <a
                            id="email-send"
                            href="mailto:estloewenberg@gmail.com"
                        >
                            estloewenberg@gmail.com
                        </a>
                    </h2>
                    <div id="social-links-container">
                        <h3>Find me on:</h3>
                        <a href="https://github.com/esloewe">
                            <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/estefanialoewenberg/">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="https://www.instagram.com/esloewe/">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
