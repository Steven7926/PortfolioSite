import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import { Fade, Bounce } from "react-reveal";
import steven from '../assets/stevenphoto.jpg';
import Typing from 'react-typing-animation';


function Introduction() {
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="head">
                <div style={{overflow: 'hidden', marginRight: '40px'}}>
                    <div className="intro">                     
                            <h1 className="hello">
                            <Typing>
                                <span>Hello, Steven Here! </span>
                                <span className="spin">👨‍💻</span>  
                            </Typing>                           
                            </h1>                        
                            <p className="introp">
                                I'm a computer engineer with a passion for hardware and software development 🤖.
                                I'm experienced in building web and mobile applications using JavaScript, Reactjs, Nodejs,
                                Java, C#, SQL, MongoDB, HTML, and CSS. I also have experience in small scale embedded systems and PCB design! 🖥️
                            </p>
                        <div className = "thebuttons">
                            <a style={{ textDecoration: 'none' }} href="https://github.com/Steven7926" target="_blank">
                                <button className="socialbut" style={{backgroundColor: 'darkgrey'}}>                                  
                                    <span style={{ color: 'white' }} className= 'buttonText' ><b>Github </b></span>
                                    <FontAwesomeIcon icon={faGithub} size="2x" transform="down-3"/>
                                </button>
                            </a>
                            <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/steven-hudson-42a79714b" target="_blank">
                                <button className="socialbut" style={{ backgroundColor: '#78A2CC' }}>                                
                                    <span style={{ color: 'white' }} className='buttonText'><b>Linkedin </b></span>
                                    <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0E76A8' }} size="2x" transform="down-3" />
                                </button>
                            </a>
                            <a style={{ textDecoration: 'none'}} href="https://www.instagram.com/steven9926/" target="_blank">
                                <button className="socialbut grad">
                                    <span style={{ color: 'white' }} className='buttonText'><b>Instagram</b> </span>
                                        <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} size="2x" transform="down-3 " />
                                </button>
                            </a>
                            <a style={{ textDecoration: 'none' }} href="http://localhost:3000/">
                                <button className="socialbut" style={{ backgroundColor: '#77DD77' }}>                                   
                                    <span style={{ color: 'white' }} className='buttonText'><b>Portfolio </b></span>
                                    <FontAwesomeIcon icon={faUser} style={{ color: '#566E57' }} size="2x" transform="down-3 shrink-2"/>
                                </button>
                            </a>
                            <a style={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1cQPeCJChBcjQn9pUvEDw5oKSBmeU5bBu/view?usp=sharing" target="_blank">
                                <button className="socialbut" style={{ backgroundColor: '#B19CD9' }}>                                 
                                    <span style={{ color: 'white' }} className='buttonText'><b>Resume </b></span>
                                    <FontAwesomeIcon icon={faFile} style={{ color: 'white' }} size="2x" transform="down-3 shrink-2"/>
                                </button>
                            </a>
                        </div>
                    </div>
                    <Bounce right duration={2000} distance="40px">
                        <div className = "steven">
                            <img src={steven} alt="Steven" />
                        </div>
                    </Bounce>
                </div>
            </div>
        </Fade>
    );
}
export default Introduction;