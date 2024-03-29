import {React, useEffect, useState, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUniversity, faLaptopCode, faBriefcase, faProjectDiagram, faChalkboardTeacher, faUser } from '@fortawesome/free-solid-svg-icons'
import '../css/nav.css'
import {useNavigate, useLocation} from 'react-router-dom'


function Header() {
    library.add(faUniversity, faLaptopCode, faBriefcase, faProjectDiagram, faChalkboardTeacher, faUser)
    let headings = [
        {name: "About", icon: ["fa", "user"], select: "about"},
        {name: "Work", icon: ["fa", "briefcase"], select: "work"}, 
        {name: "Education", icon: ["fa", "university"], select: "education"}, 
        {name: "Skills", icon: ["fa", "laptop-code"], select: "skills"}, 
        {name: "Projects", icon: ["fa", "project-diagram"], select: "projects"},
    ]

    const navigate = useNavigate();
    const location = useLocation();
    const selection = location.pathname.replace("/", "")
    const [isNavOpen, openNav] = useState(false)
    const hasPageRendered = useRef(false)
    const [itemSelected, selectItem] = useState(selection)
    const [pointDir, setPointDir] = useState('point-left')
    const [hideOps, setHideOps] = useState('hidden')

    useEffect(() => {
        if (hasPageRendered.current) {
            if (selection == "")
                selectItem("about")

            if (isNavOpen)
                setPointDir('point-right animate-spinRight')
            else {
                setPointDir('point-left animate-spinLeft')       
                setHideOps('invisible')
            }
        }
        hasPageRendered.current = true

    }, [isNavOpen])

    function handleNav(name) {
        if(name == "about")
            name = ""
        navigate(name.replace(" ", ""))
    }
    
    return (
        <div className="font-mono phone:p-6 p-4">
            <div className= "flex flex-row">
                <div className="p-2">
                    <span>11001 - Steven</span>                     
                </div>
                <div id = "navigation" className="flex ml-auto phone:static absolute right-0" key="nav">
                    <div className= { `${isNavOpen ? "animate-slideOutX" : `animate-slideInX ${hideOps}` } z-10 phone:bg-transparent bg-lightGrey rounded-lg phone:shadow-none shadow-md flex phone:flex-row flex-col transition-transform duration-300`}>
                        {headings.map((heading) => (
                                <button key={heading.select} className="phone:p-2 px-3 py-2 hover:none phone:hover:scale-110 transition-transform" 
                                        onClick={() => {
                                            selectItem(heading.select)
                                            handleNav(heading.name.toLowerCase())
                                            openNav(prev => !prev)
                                        }}
                                >
                                    <FontAwesomeIcon className = 'mr-1' icon={heading.icon} color={itemSelected === heading.select ? "#CABF85" : "#FFFFFF"}/>
                                    <span className={`${itemSelected === heading.select ? 'text-gold' : 'text-darkGrey dark:text-white'} mr-2`}>{heading.name}</span>        
                                </button>                
                                                
                        ))}
                    </div>                         
                    <button className = 'ml-4 nav-wrapper nav-open' onClick={() => openNav(prev => !prev)} data-testid = "nav-open-button">
                        <div className="nav-menu">
                            <span className={`${pointDir} lines bg-white before:bg-white after:bg-white dark:bg-white dark:before:bg-white dark:after:bg-white`}></span>
                        </div>
                    </button>
                </div>                
            </div>          
        </div>

    );
}
export default Header;