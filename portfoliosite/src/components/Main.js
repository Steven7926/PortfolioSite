import React, { Component } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import  "../css/Portfolio.css";
export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Introduction />
                <WorkExperience />
                <Education />
                <Skills />
            </div>
        );
    }
}