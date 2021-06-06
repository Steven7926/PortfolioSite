import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faLaptopCode, faStar, faBriefcase, faProjectDiagram, faChalkboardTeacher, faTools } from '@fortawesome/free-solid-svg-icons'
import { Bounce } from "react-reveal";
function Header() {
    return (
        <Bounce left duration={2000} distance="40px">
            <header className="header">
                <ul className = "menu">
                    <li>
                        <a href="#workexperience">
                            <span>Work Experience </span>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </a>                   
                    </li>
                    <li>
                        <a href="#education">
                            <span>Education </span>
                            <FontAwesomeIcon icon={faUniversity} />
                        </a>                
                    </li>
                    <li>
                        <a href="#skills">
                            <span>Skills </span>
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </a>                   
                    </li>
                    <li>
                        <a href="#projects">
                            <span>Projects </span>
                            <FontAwesomeIcon icon={faProjectDiagram} />
                        </a>
                    </li>
                    <li>
                        <a href="#leadership">
                            <span>Leadership </span>
                            <FontAwesomeIcon icon={faChalkboardTeacher} />
                        </a>
                    </li>
                    {
                            /* <li>
                            <a href="">
                                <span>Achievements </span>
                                <FontAwesomeIcon icon={faStar} />
                            </a>
                        </li>*/
                    }
                    <br />
                    <li style={{ marginLeft: '30%' }}>
                        <span style={{ fontWeight: 'bold', color: '#FF6961', fontSize: '30px' }}>Site still under construction </span>
                        <FontAwesomeIcon icon={faTools} style={{ fontWeight: 'bold', color: '#FF6961' }} size = '2x' />
                    </li>
                    <li style={{ marginLeft: '40%' }}>
                        <span style={{ fontWeight: 'bold', color: '#FF6961', fontSize: '15px' }}>Next update: Mobile Friendly </span>
                    </li>
                </ul>
            </header>
        </Bounce>
    );
}
export default Header;