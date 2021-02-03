import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";


function Introduction() {
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="head">
                <h1 className = "hello">
                    <span>Hello, Steven Here! </span>
                    <span className="spin">👨‍💻</span>
                </h1>
                <p className="intro">
                    I'm a computer engineer with a passion for hardware and software development 🤖.
                    I'm experienced in building web and mobile applications using JavaScript, Reactjs, Nodejs,
                    Java, C#, SQL, MongoDB, HTML, and CSS. I also have experience in small scale embedded systems! 🖥️
                </p>
                <div>
                    <button className="socialbut">
                        <a href="https://github.com/Steven7926" target="_blank">Github</a>                       
                    </button>
                    <button className="socialbut">
                        <a href="https://linkedin.com/in/steven-husdon-42a79714b" target="_blank">Linkedin</a>
                    </button>
                    <button className="socialbut">
                        <a href="https://www.instagram.com/steven9926/" target="_blank">Instagram</a>
                    </button>
                    <button className="socialbut">
                        <a href="http://localhost:3000/">Portfolio Site</a>
                    </button>
                </div>
                <div className="contact">
                    <button>
                        Resume
                        <FontAwesomeIcon />
                    </button>
                    <button>
                        Contact Info
                        <FontAwesomeIcon />
                    </button>
                </div>
            </div>
        </Fade>
    );
}
export default Introduction;