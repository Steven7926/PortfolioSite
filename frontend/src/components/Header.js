import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUniversity, faLaptopCode, faBriefcase, faProjectDiagram, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Bounce } from "react-reveal";

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
        <Bounce left duration={1000}>
            <div className="">
                <ul className= "flex flex-row">
                    {headings.map((heading) => (
                        <li className="basis-1/8 mr-4 hover:p-2 transition-all hover:bg-slate-600 hover:rounded-md">
                            <a href={"#" + heading.name.toLowerCase().replace(" ", "")}>
                                <span className="mr-1">{heading.name}</span>
                                <FontAwesomeIcon icon={heading.icon} />
                            </a>                
                        </li>
                    ))
                    }
                </ul>             
            </div>
        </Bounce>
    );
}
export default Header;