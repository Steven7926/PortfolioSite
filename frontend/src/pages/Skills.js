import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faDatabase, faBook, faCode, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faNode, faHtml5, faCss3Alt, faBootstrap, faNpm, faMicrosoft, faAws, 
         faAngular, faJava, faPython, faErlang, faReact, faPhp, faWordpress, 
         faGithub, faYarn, faJenkins, faGolang, faDocker, faJs} from '@fortawesome/free-brands-svg-icons';
import { Fade } from "react-awesome-reveal";
// import jquery from '../assets/jquery.png';
import flutter from '../assets/svgs/flutter.svg';
import cLang from '../assets/svgs/c.svg';
import cSharp from '../assets/svgs/c-sharp.svg';
import cPlus from '../assets/svgs/cplusplus.svg';
import typescript from '../assets/svgs/typescript.svg';
import haskell from '../assets/svgs/haskell.svg';
import kubernetes from '../assets/svgs/kubernetes.svg';
import css from '../assets/svgs/css.svg';
import vscode from '../assets/svgs/vscode.svg';
import mongodb from '../assets/svgs/mongodb.svg';
import express from '../assets/svgs/express.svg';
import jquery from '../assets/svgs/jquery.svg';

function Skills() {

    library.add(faGolang, faNode, faJs, faHtml5, faCss3Alt, faBootstrap, faNpm, faMicrosoft, faAws, faAngular, faJava, 
                faPython, faErlang, faReact, faPhp, faDocker, faWordpress, faGithub, faYarn, faJenkins, faDatabase)
    let libraries = [
        {name: "Node", icon: ["fab", "node"], ref: "https://nodejs.org/en/about"},
        {name: "Bootstrap", icon: ["fab", "bootstrap"], ref: "https://getbootstrap.com/"},
        {name: "NPM", icon: ["fab", "npm"], ref: "https://www.npmjs.com/"},
        {name: "Angular", icon: ["fab", "angular"], ref: "https://angular.io/"},     
        {name: "React", icon: ["fab", "react"], ref: "https://react.dev/"},
        {name: "React Native", icon: ["fab", "react"], ref: " https://reactnative.dev/"},     
        {name: "Flutter", icon: [flutter], ref: "https://flutter.dev/"},
        {name: "Yarn", icon: ["fab", "yarn"], ref: "https://yarnpkg.com/"},
        {name: "Express", icon: [express], ref: "https://expressjs.com/"},
        {name: "jQuery", icon: [jquery], ref: "https://jquery.com/"},
    ]

    let programmingMarkup = [
        {name: "JavaScript", icon: ["fab", "js"], ref: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"},
        {name: "TypeScript", icon: [typescript], ref: "https://www.typescriptlang.org/"},  
        {name: "HTML", icon: ["fab", "html5"], ref: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"}, 
        {name: "CSS", icon: [css], ref: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
        {name: "Java", icon: ["fab", "java"], ref: "https://www.java.com/en/"},
        {name: "Python", icon: ["fab", "python"], ref: "https://www.python.org/"},
        {name: "Erlang", icon: ["fab", "erlang"], ref: "https://www.erlang.org/"},
        {name: "Haskell", icon: [haskell], ref: "https://www.haskell.org/"},
        {name: "PHP", icon: ["fab", "php"], ref: "https://www.php.net/"},
        {name: "GoLang", icon: ["fab", "golang"], ref: "https://go.dev/"},
        {name: "SQL", icon: ["fa", "database"], ref: "https://aws.amazon.com/what-is/sql/"},
        {name: "C", icon: [cLang], ref: "https://go.dev/"},
        {name: "C#", icon: [cSharp], ref: "https://learn.microsoft.com/en-us/dotnet/csharp/"},
        {name: "C++", icon: [cPlus], ref: "https://cplusplus.com/doc/tutorial/"},
    ]

    let toolsTech = [
        {name: "Azure", icon: ["fab", "microsoft"], ref: "https://azure.microsoft.com/en-us/products/devops"},
        {name: "AWS", icon: ["fab", "aws"], ref: "https://aws.amazon.com/"},
        {name: "Github", icon: ["fab", "github"], ref: "https://github.com/"},
        {name: "Docker", icon: ["fab", "docker"], ref: "https://www.docker.com/"},
        {name: "Kubernetes", icon: [kubernetes], ref: "https://kubernetes.io/"},
        {name: "Jenkins", icon: ["fab", "jenkins"], ref: "https://www.jenkins.io/"},
        {name: "MongoDB", icon: [mongodb], ref: "https://www.mongodb.com/"},
        {name: "VSCode", icon: [vscode], ref: "https://code.visualstudio.com/"},
        {name: "Wordpress", icon: ["fab", "wordpress"], ref: "https://wordpress.org/"},
    ]

    return (
        <div id="skills" className = "flex flex-col flex-wrap">
            <Fade duration={800} direction="up" triggerOnce = {true} cascade fraction={0} damping={0.5}>
                <div className='flex justify-center items-center'>
                    <span className='pt-4 px-2'>Skills</span>
                    <FontAwesomeIcon icon={faLaptopCode} size='2x' />
                </div>
                <div className='flex flex-col justify-center items-center bg-blackClear rounded-md mt-5'>
                    <div className = 'flex flex-row mt-5'>
                        <span className='pt-4 px-2'>Frameworks and Libraries </span>
                        <FontAwesomeIcon icon={faBook} size='2x' />
                    </div> 
                    <div className = 'flex flex-row justify-center items-center flex-wrap mt-5'>
                        {libraries.map((lib) => (            
                            <a href = {lib.ref} className='flex flex-col justify-center items-center m-5 hover:scale-110 transition-transform'>    
                                {lib.icon.length > 1 ? <FontAwesomeIcon icon={lib.icon} size='2x' /> : <img src={lib.icon[0]}/>}
                                <span className=''>{lib.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center rounded-md mt-5'>
                    <div className = 'flex flex-row mt-5'>
                        <span className='pt-4 px-2'>Languages and Markups </span>
                        <FontAwesomeIcon icon={faCode} size='2x' />
                    </div> 
                    <div className = 'flex flex-row justify-center items-center flex-wrap mt-5'>
                        {programmingMarkup.map((lang) => (            
                            <a href = {lang.ref} className='flex flex-col justify-center items-center m-5 hover:scale-110 transition-transform'>    
                                {lang.icon.length > 1 ?<FontAwesomeIcon icon={lang.icon} size='2x' /> : <img src={lang.icon[0]}/>}
                                <span className=''>{lang.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center bg-blackClear rounded-md mt-5'>
                    <div className = 'flex flex-row mt-5'>
                        <span className='pt-4 px-2'>Tools and Technologies </span>
                        <FontAwesomeIcon icon={faToolbox} size='2x' />
                    </div> 
                    <div className = 'flex flex-row justify-center items-center flex-wrap mt-5'>
                        {toolsTech.map((tool) => (            
                            <a href = {tool.ref} className='flex flex-col justify-center items-center m-5 hover:scale-110 transition-transform'>    
                                {tool.icon.length > 1 ? <FontAwesomeIcon icon={tool.icon} size='2x' /> : <img src={tool.icon[0]}/>}
                                <span className=''>{tool.name}</span>
                            </a>
                        ))}
                    </div>
                </div>      
            </Fade>                     
        </div>
    );
}
export default Skills;