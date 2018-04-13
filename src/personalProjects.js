import React from "react";
import "./styles/personalProjects.css";
const imageboard = require("./media/imageboard.gif");
const petition = require("./media/petition-site.png");
const shopping = require("./media/shopping-site.gif");
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
                            <img src={imageboard} alt="" />
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
                            <img src={shopping} alt="" />
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
                                    Heroku Site
                                </a>
                            </div>
                        </div>
                        <div className="single-project-container">
                            <h2>Connect Four Game</h2>
                            <img src={connectFour} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
