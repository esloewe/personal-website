import React from "react";
import "./styles/mainInfo.css";

export default class MainInfo extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="main-container">
                <p id="info">Web Developer based in Berlin</p>
                <p id="technologies">
                    React.js | Javascript | HTML5 &
                    CSS3{" "}
                </p>
            </div>
        );
    }
}
