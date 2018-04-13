import React from "react";
import "./styles/about.css";

export default class About extends React.Component {
    render() {
        return (
            <div className="about-container">
                <div>
                    <h1 className="titles">About me</h1>
                    <p id="p-about">
                        My name is Estefania. I am a web developer who strives
                        to provide great user experiences by identifying
                        problems and understanding the users journey through a
                        website. My work experience in eCommerce sparked my
                        interest in technology leading me to focus the next step
                        of my career in web development. Originally from
                        Honduras, I have been living in different countries for
                        the past 9 years. Besides my interest in tech I enjoy
                        practicing yoga and meditation. I am looking to work in
                        a innovative company with strong values and freedom for
                        creative problem solving and learning opportunities.
                    </p>
                </div>
            </div>
        );
    }
}
