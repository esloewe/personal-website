import React from "react";
import "./styles/mainInfo.css";

export default class MainInfo extends React.Component {
    constructor() {
        super();
        this.state = {
        };

    }

    render() {
        return (
            <div className="main-container">
                <h1 className="mobile-info"> Mobile site coming soon!!!</h1>
                <p id="info">Full-Stack Web Developer based in Berlin</p>
                <p id="technologies">Node.js | React.js | Redux | Vue.js | Javascript | HTML5 & CSS3 </p>
            </div>
        );
    }
}
