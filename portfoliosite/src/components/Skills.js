import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faLaptopCode, faStar, faBriefcase, faProjectDiagram, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Fade, Bounce } from "react-reveal";
import ucf from '../assets/UCFlogo.png';


function Skills() {
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="head" id="education">
                <br />
                <br />
                <div style={{ border: '2px solid darkgrey', borderRadius: '5px', backgroundColor: 'darkgrey', boxShadow: '10px 5px 5px black', width: '80vh' }}>
                    <span style={{ fontSize: '50px', marginLeft: '5px' }}><b>Skills </b></span>
                    <FontAwesomeIcon icon={faLaptopCode} size='3x' style={{ float: 'right', marginRight: '5px' }} />
                </div>
                <div className="skills">
                    <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                        <div style={{ float: 'left' }}>
                            <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>University of Central Florida</b> </span>
                        </div>
                        <div style={{ float: 'left' }}>
                            <span style={{ fontSize: '35px', marginLeft: '16vh' }}><b>Fall 2017 - Spring 2021</b></span>
                        </div>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <div style={{ float: 'left', width: '20vh' }}>
                            
                        </div>
                        <div style={{ marginRight: '10vh', float: 'right' }}>
                            <Bounce left duration={2000} distance="40px">
                                <br />
                                <div>
                                    <div>
                                        <span style={{ fontSize: '25px' }}> Major: Computer Engineering </span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '25px' }}> Minor: Mathematics </span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '25px' }}> GPA: 3.2 </span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '25px' }}> Degree Received: Bachelors of Science in Computer Engineering</span>
                                        <div style={{ marginLeft: '21vh' }}>
                                            <span style={{ fontSize: '25px' }}>with a minor in Mathematics</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '25px' }}> Took courses in the following categories:</span>
                                        <div style={{ marginLeft: '15vh' }}>
                                            <li style={{ fontSize: '20px' }}>Computer Architecture</li>
                                            <li style={{ fontSize: '20px' }}>Data Structures</li>
                                            <li style={{ fontSize: '20px' }}>Embedded Systems</li>
                                            <li style={{ fontSize: '20px' }}>Software Design</li>
                                            <li style={{ fontSize: '20px' }}>Circuit Theory</li>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </Bounce>
                        </div>
                    </div>
                </div>
                <div>
                    More Coming Soon...
                    <br />
                    <br />
                </div>
            </div>
        </Fade>
    );
}
export default Skills;