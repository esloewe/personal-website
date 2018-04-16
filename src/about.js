import React from "react";
import "./styles/about.css";
import { Link } from "react-router-dom";

export default class About extends React.Component {
    render() {
        return (
            <div className="about-container">
                <div>
                    <h1 className="titles">About me</h1>
                    <p id="p-about">
                        My name is Estefania. I am a web developer who strives
                        to provide great user experiences by identifying
                        problems and understanding the users journey while browsing a website.
                        My work experience in e-commerce sparked my
                        interest in technology leading me to focus the next step
                        of my career in web development. Originally from
                        Honduras, I have been living in different countries for
                        the past 9 years. Besides my interest in tech I enjoy
                        practicing yoga and meditation.<br></br><br></br>
                    Feel free to <Link id="reach-out" to="/contact">reach out</Link> if you have any questions, project collaboration ideas or simply want to chat.
                    </p>
                </div>
            </div>
        );
    }
}
