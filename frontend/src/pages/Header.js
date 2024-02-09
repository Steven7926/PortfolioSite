import {React, useEffect, useState, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUniversity, faLaptopCode, faBriefcase, faProjectDiagram, faChalkboardTeacher, faUser } from '@fortawesome/free-solid-svg-icons'
import '../css/nav.css'
import {useNavigate} from 'react-router-dom'


function Header() {
    library.add(faUniversity, faLaptopCode, faBriefcase, faProjectDiagram, faChalkboardTeacher, faUser)
    let headings = [
        {name: "About", icon: ["fa", "user"]},
        {name: "Work Experience", icon: ["fa", "university"]}, 
        {name: "Education", icon: ["fa", "laptop-code"]}, 
        {name: "Skills", icon: ["fa", "briefcase"]}, 
        {name: "Projects", icon: ["fa", "project-diagram"]},
    ]

    const navigate = useNavigate();
    const [isNavOpen, openNav] = useState(false)
    const hasPageRendered = useRef(false)
    const [itemSelected, selectItem] = useState('About')
    const [pointDir, setPointDir] = useState('point-left')
    const [hideOps, setHideOps] = useState('hidden')

    useEffect(() => {
        if (hasPageRendered.current) {
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
        console.log(name)
        navigate(name.replace(" ", ""))
    }
    
    
    return (
        <div>
            <div className="font-mono phone:p-6 p-4">
                <div className= "flex flex-row">
                    <div className="p-2">
                        <span>11001 - Steven</span>                     
                    </div>
                    <div className="flex ml-auto phone:static absolute right-0">
                        <div className= { `${isNavOpen ? "animate-slideOutX" : `animate-slideInX ${hideOps}` } phone:bg-transparent bg-lightGrey rounded-lg phone:shadow-none shadow-md flex phone:flex-row flex-col transition-transform duration-300`}>
                            {headings.map((heading) => (
                                    <button className="phone:p-2 px-3 py-2 hover:scale-110 transition-transform" 
                                            onClick={() => {
                                                selectItem(heading.name)
                                                handleNav(heading.name.toLowerCase())
                                            }}
                                    >
                                        <FontAwesomeIcon className = 'mr-1' icon={heading.icon} color={itemSelected === heading.name ? "#CABF85" : "#FFFFFF"}/>
                                        <span className={`${itemSelected === heading.name ? 'text-gold' : 'text-darkGrey dark:text-white'} mr-2`}>{heading.name}</span>        
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
        </div>
    );
}
export default Header;