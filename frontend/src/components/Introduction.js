
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFile} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Fade } from "react-reveal";
import steven from '../assets/stevenphoto.jpg';
import { TypeAnimation } from 'react-type-animation';


function Introduction() {
    library.add(faGithub, faLinkedin, faFile, fab)
    let buttons = [
        {name: "Github", icon: ["fab", "github"], href: "https://github.com/Steven7926", bg: 'darkgrey'}, 
        {name: "Linkedin", icon: ["fab", "linkedin"], href: "https://www.linkedin.com/in/steven-hudson-42a79714b", bg: '#78A2CC'}, 
        {name: "Resume", icon: ["fa", "file"], href: "https://drive.google.com/file/d/1cQPeCJChBcjQn9pUvEDw5oKSBmeU5bBu/view?usp=sharing", bg: '#B19CD9'}
    ]

    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="">                     
                <h1 className="">
                    <TypeAnimation
                        sequence={['Hello, Steven Here!', 1000]}
                    />                 
                </h1>                        
                <p className="">
                    I'm a Computer Engineer with a passion for hardware and software development 🤖.
                    I'm experienced in building full stack containerized web and mobile applications 
                    using JavaScript/TypeScript, Reactjs, Nodejs, Java, C#, SQL, MongoDB, and GO. 
                    I also have experience in small scale embedded systems and PCB design! 🖥️
                </p>
                <div className = "">
                    {buttons.map((button) => (
                        <a style={{ textDecoration: 'none' }} href={button.href} >
                            <button className="" style={{backgroundColor: button.bg}}>                                  
                                <span style={{ color: 'white' }} className= 'buttonText' ><b>{button.name}</b></span>
                                <FontAwesomeIcon icon={button.icon} size="2x" transform="down-3"/>
                            </button>
                        </a>
                    ))}               
                </div>
            </div>
            <div className = "steven">
                <img src={steven} alt="Sneaking around are we?" />
            </div>
        </Fade>
    );
}
export default Introduction;