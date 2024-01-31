
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
            <div className="flex flex-row px-10 pt-8">
                <div className="w-1/2">                     
                    <h1 className="">
                        Steven Hudson              
                    </h1>                        
                    <p className="font-mono">
                        A Computer Engineer with a passion for hardware and software development 🤖.
                        Experienced in building full stack containerized web and mobile applications 
                        using JavaScript/TypeScript, Reactjs, Nodejs, Java, C#, SQL, MongoDB, and GO. 
                        Experienced and hobbies in small scale embedded systems and PCB design. 🖥️
                    </p>
                    <div className = "">
                        {buttons.map((button) => (
                            <a href={button.href} >
                                <button className="font-mono rounded-lg p-2 mr-2 shadow-lg hover:scale-110 transition-all ease-in-out text-md" style={{backgroundColor: button.bg}}>                                  
                                    <span className='pr-2' ><b>{button.name}</b></span>
                                    <FontAwesomeIcon icon={button.icon} size="1x"/>
                                </button>
                            </a>
                        ))}               
                    </div>
                </div>
                <div className="flex flex-row w-1/2 justify-center">
                    <div className = "w-1/4">
                        <img className = "rounded shadow-lg" src={steven} alt="Sneaking around are we?" />
                    </div>
                </div>
              
            </div>
        </Fade>
    );
}
export default Introduction;