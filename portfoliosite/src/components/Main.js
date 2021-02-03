import React, { Component } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import  "../css/Portfolio.css";
export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Introduction />
            </div>
        );
    }
}