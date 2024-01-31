import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUniversity, faLaptopCode, faBriefcase, faProjectDiagram, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Bounce } from "react-reveal";
import { TypeAnimation } from 'react-type-animation';

function Header() {
    library.add(faUniversity, faLaptopCode, faBriefcase, faProjectDiagram, faChalkboardTeacher)
    let headings = [
        {name: "Work Experience", icon: ["fa", "university"]}, 
        {name: "Education", icon: ["fa", "laptop-code"]}, 
        {name: "Skills", icon: ["fa", "briefcase"]}, 
        {name: "Projects", icon: ["fa", "project-diagram"]},
        {name: "Leadership", icon: ["fa", "chalkboard-teacher"]},
    ]

    return (
        <div left duration={1000}>
            <div className="font-mono">
                <ul className= "flex flex-row">
                    <div className="p-2 w-1/2">
                        <TypeAnimation
                            sequence={[' 11001 - Steven', 1000]}
                            cursor={false}
                        />                          
                    </div>
                    {headings.map((heading) => (
                        <li className="mr-4 transition-all ease-in-out hover:scale-110 p-2 duration-300 hover:bg-slate-600 hover:rounded-md">
                            <a href={"#" + heading.name.toLowerCase().replace(" ", "")}>
                                <span className="mr-1">{heading.name}</span>
                                <FontAwesomeIcon icon={heading.icon} />
                            </a>                
                        </li>
                    ))
                    }
                </ul>
                <div className="px-2">
                    <TypeAnimation
                        sequence={['return {', 1000]}
                    />    
                </div>             
            </div>
        </div>
    );
}
export default Header;