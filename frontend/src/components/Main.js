import React, { Component } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Leadership from "./Leadership";
import Footer from "./Footer";
import  "../css/Portfolio.css";
export default class Main extends Component {
    render() {
        return (
            <div className="m-6 h-full">
                <Header />
                <Introduction />
                <WorkExperience />
                {
                //<Education />
                //<Skills />
                //<Projects />
                //<Leadership />
                }
                <Footer />
            </div>
        );
    }
}