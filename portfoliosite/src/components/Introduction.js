import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import { Fade, Bounce } from "react-reveal";
import steven from '../assets/stevenphoto.jpg';


function Introduction() {
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="head">
                <div style={{overflow: 'hidden', marginRight: '40px'}}>
                    <div className = "intro">
                        <h1 className = "hello">
                            <span>Hello, Steven Here! </span>
                            <span className="spin">👨‍💻</span>
                        </h1>
                        <p className="intro">
                            I'm a computer engineer with a passion for hardware and software development 🤖.
                            I'm experienced in building web and mobile applications using JavaScript, Reactjs, Nodejs,
                            Java, C#, SQL, MongoDB, HTML, and CSS. I also have experience in small scale embedded systems and PCB design! 🖥️
                        </p>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="https://github.com/Steven7926" target="_blank">
                                <button className="socialbut" style={{backgroundColor: 'darkgrey'}}>                                  
                                    <span style={{ color: 'white' }}><b>Github </b></span>
                                    <FontAwesomeIcon icon={faGithub} size="2x" transform="down-3"/>
                                </button>
                            </a>
                            <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/steven-hudson-42a79714b" target="_blank">
                                <button className="socialbut" style={{ backgroundColor: '#78A2CC' }}>                                
                                    <span style={{ color: 'white' }}><b>Linkedin </b></span>
                                    <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0E76A8' }} size="2x" transform="down-3" />
                                </button>
                            </a>
                            <a style={{ textDecoration: 'none'}} href="https://www.instagram.com/steven9926/" target="_blank">
                                <button className="socialbut grad">
                                        <span style={{color: 'white'}}><b>Instagram</b> </span>
                                        <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} size="2x" transform="down-3 " />
                                </button>
                            </a>
                            <a style={{ textDecoration: 'none' }} href="http://localhost:3000/">
                                <button className="socialbut" style={{ backgroundColor: '#77DD77' }}>                                   
                                    <span style={{ color: 'white' }}><b>Portfolio </b></span>
                                    <FontAwesomeIcon icon={faUser} style={{ color: '#566E57' }} size="2x" transform="down-3 shrink-2"/>
                                </button>
                            </a>
                            <a style={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1cQPeCJChBcjQn9pUvEDw5oKSBmeU5bBu/view?usp=sharing" target="_blank">
                                <button className="socialbut" style={{ backgroundColor: '#B19CD9' }}>                                 
                                    <span style={{ color: 'white' }}><b>Resume </b></span>
                                    <FontAwesomeIcon icon={faFile} style={{ color: 'white' }} size="2x" transform="down-3 shrink-2"/>
                                </button>
                            </a>
                        </div>
                    </div>
                    <Bounce right duration={2000} distance="40px">
                        <div style={{ float: 'left', marginLeft: '25vh'}}>
                            <img src={steven} style={{ width: '40vh', borderRadius: '10px', boxShadow: '10px 5px 5px black'  }} alt="Steven" />
                        </div>
                    </Bounce>
                </div>
            </div>
        </Fade>
    );
}
export default Introduction;