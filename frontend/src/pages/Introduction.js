
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFile} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Fade } from "react-awesome-reveal";
import steven from '../assets/stevenphoto.jpg';
import { TypeAnimation } from 'react-type-animation';


function Introduction() {
    library.add(faGithub, faLinkedin, faFile, fab)
    let buttons = [
        {name: "Github", icon: ["fab", "github"], href: "https://github.com/Steven7926", bg: 'darkgrey'}, 
        {name: "Linkedin", icon: ["fab", "linkedin"], href: "https://www.linkedin.com/in/steven-hudson-42a79714b", bg: '#78A2CC'}, 
        {name: "Resume", icon: ["fa", "file"], href: "https://drive.google.com/file/d/1cQPeCJChBcjQn9pUvEDw5oKSBmeU5bBu/view?usp=sharing", bg: '#B19CD9'}
    ]
    const writtin_block = "return {" + "\n" + "  name: \"Steven Hudson\"," +
                            "\n  occupation: \"Full Stack Software Engineer\"," +
                            "\n  degree: \"BS in Computer Engineering with Mathematics Minor\"," +
                            "\n  hobbies: [\"Soccer\", \"Fetch with my dogs\", \"Traveling\", \"Eating\", \"Lifting\"]" +
                            "\n }"

    return (
        <div className="flex flex-row phone:px-10 px-6 pt-6">
            <div className="w-full">                     
                <pre className="text-wrap">
                    <TypeAnimation
                        sequence={[writtin_block, 500]}
                        speed={90}
                    />  
                </pre>
                <Fade duration={2000} delay={2500} direction="up">                      
                    <div className = "pt-5">
                        {buttons.map((button) => (
                            <a href={button.href} >
                                <button className="font-mono rounded-lg p-2 mr-2 shadow-lg hover:scale-110 transition-all ease-in-out text-md" style={{backgroundColor: button.bg}}>                                  
                                    <span className='pr-2' ><b>{button.name}</b></span>
                                    <FontAwesomeIcon icon={button.icon} size="1x"/>
                                </button>
                            </a>
                        ))}               
                    </div>
                </Fade>
            </div>
        </div>
    );
}
export default Introduction;