import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faLaptopCode, faStar, faBriefcase, faProjectDiagram, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Bounce } from "react-reveal";
function Header() {
    return (
        <Bounce left duration={2000} distance="40px">
            <header className="header">
                <ul className = "menu">
                    <li>
                        <a href="https://google.com">
                            <span>Work Experience </span>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </a>                   
                    </li>
                    <li>
                        <a href="https://google.com">
                            <span>Education </span>
                            <FontAwesomeIcon icon={faUniversity} />
                        </a>                
                    </li>
                    <li>
                        <a href="https://google.com">
                            <span>Skills </span>
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </a>                   
                    </li>
                    <li>
                        <a href="https://google.com">
                            <span>Projects </span>
                            <FontAwesomeIcon icon={faProjectDiagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com">
                            <span>Leadership </span>
                            <FontAwesomeIcon icon={faChalkboardTeacher} />
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com">
                            <span>Achievements </span>
                            <FontAwesomeIcon icon={faStar} />
                        </a>
                    </li>
                </ul>
            </header>
        </Bounce>
    );
}
export default Header;