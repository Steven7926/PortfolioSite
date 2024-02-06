import {React, useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUniversity, faLaptopCode, faBriefcase, faProjectDiagram, faChalkboardTeacher, faUser } from '@fortawesome/free-solid-svg-icons'
import '../css/nav.css'


function Header() {
    library.add(faUniversity, faLaptopCode, faBriefcase, faProjectDiagram, faChalkboardTeacher, faUser)
    let headings = [
        {name: "Home", icon: ["fa", "user"]},
        {name: "Work Experience", icon: ["fa", "university"]}, 
        {name: "Education", icon: ["fa", "laptop-code"]}, 
        {name: "Skills", icon: ["fa", "briefcase"]}, 
        {name: "Projects", icon: ["fa", "project-diagram"]},
        {name: "Leadership", icon: ["fa", "chalkboard-teacher"]},
    ]

    const [isNavOpen, openNav] = useState(false)
    const [itemSelected, selectItem] = useState('Home')
    const [pointDir, setPointDir] = useState('point-left')

    useEffect(() => {
        setTimeout(() => {
            if (isNavOpen) setPointDir('point-right animate-spinRight')
            else setPointDir('point-left animate-spinLeft')
        }, 100)
      }, [isNavOpen])

    return (
        <div>
            <div className="font-mono p-6">
                <div className= "flex flex-row w-full">
                    <div className="p-2">
                        <span>11001 - Steven</span>                     
                    </div>
                    <div className="flex flex-row ml-auto">
                        {headings.map((heading) => (
                            <div className= { `${isNavOpen ? "animate-fadeIn" : "animate-fadeOut invisible" } flex mr-4 transition-all ease-in-out hover:scale-110 p-2 duration-300 hover:bg-slate-600 hover:rounded-md`}>
                                <a href={"#" + heading.name.toLowerCase().replace(" ", "")}>
                                    <span className={`${itemSelected === heading.name ? 'text-gold' : 'text-darkGrey dark:text-white'} mr-2`}>{heading.name}</span>
                                    <FontAwesomeIcon icon={heading.icon} color={itemSelected === heading.name ? "#CABF85" : "#FFFFFF"}/>
                                </a>                
                            </div>
                        ))}                               
                        <button className = 'ml-4 nav-wrapper nav-open' onClick={() => openNav(prev => !prev)} data-testid = "nav-open-button">
                            <div className="nav-menu">
                                <span className={`${pointDir} lines bg-white before:bg-white after:bg-white dark:bg-white dark:before:bg-white dark:after:bg-white`}></span>
                            </div>
                        </button>
                    </div>                
                </div>          
            </div>
        </div>
    );
}
export default Header;