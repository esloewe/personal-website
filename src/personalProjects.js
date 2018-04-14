import React from "react";
import "./styles/personalProjects.css";
const imageboard = require("./media/imageboard.mp4");
const petition = require("./media/petition-site.png");
const shoppingVideo = require("./media/shopping-site.mp4")
const connectFour = require("./media/connect-four-game.png");

export default class PersonalProjects extends React.Component {
    render() {
        return (
            <div className="projects-container">
                <div>
                    <h1 className="titles">Personal Projects</h1>
                    <div>
                        <div className="single-project-container">
                            <h2>Imageboard Project</h2>
                                <video width="1000" height="auto" controls="controls">
                                    <source src= {imageboard} type="video/mp4"/>
                                </video>
                            <div className="links-projects">
                                <a
                                    className="links-projects-a"
                                    href="https://github.com/esloewe/imageboard"
                                    target="null"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                        <div className="single-project-container">
                            <h2>Shopping Site Project</h2>

                                <video width="1000" height="auto" controls="controls">
                                    <source src= {shoppingVideo} type="video/mp4"/>
                                </video>

                            <div className="links-projects">
                                <a
                                    className="links-projects-a"
                                    href="https://github.com/esloewe/shopping-site"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                        <div className="single-project-container">
                            <h2>Petition Project</h2>
                            <img src={petition} alt="" />
                            <div className="links-projects">
                                <a
                                    className="links-projects-a"
                                    href="https://github.com/esloewe/petition-site"
                                >
                                    Github
                                </a>
                                <a
                                    className="links-projects-a"
                                    href="https://petition-fashion-sustain.herokuapp.com/"
                                >
                                    The Website
                                </a>
                            </div>
                        </div>
                        <div className="single-project-container">
                            <h2>Connect Four Game</h2>
                            <img src={connectFour} alt="" />
                            <div className="links-projects">
                                <a
                                    className="links-projects-a"
                                    href="https://github.com/esloewe/connect-four-game"
                                >
                                    Github
                                </a>

                                <a
                                    className="links-projects-a"
                                    href="https://esloewe.github.io/connect-four-game/index.html"
                                >
                                    The Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
