import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-reveal";
import ucf from '../assets/UCFlogo.png';
import fam from '../assets/fam.jpg';


function Education() {
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="head" id="education">
                <br />
                <br />
                <div>
                    <span className = "edu" ><b>Education </b></span>
                    <FontAwesomeIcon icon={faUniversity} size='3x' style={{ marginLeft: '5px' }} />
                </div>
                <div style={{ overflow: 'hidden' }}> 
                    <div className="ucf">
                        <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                            <div style={{ float: 'left' }}>
                                <span className = "univ" ><b>University of Central Florida</b> </span>
                            </div>
                            <div style={{ float: 'left' }}>
                                <span className = "timeatuni"><b>Fall 2017 - Spring 2021</b></span>
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <div style={{ float: 'left'}}>
                                <img src={ucf} className = "theucflogo" alt="UCF Logo" />
                            </div>
                            <div className = "majortext">                               
                                    <br />
                                    <div className = "detailsucf">
                                        <div>
                                            <span> Major: Computer Engineering </span>
                                        </div>
                                        <div>
                                            <span> Minor: Mathematics </span>
                                        </div>
                                        <div>
                                            <span> Degree Received: Bachelors</span>
                                        </div>
                                        <div>
                                            <span> GPA: 3.2 </span>
                                        </div>
                                    </div>
                                    <div className="detailsucf">

                                        <div>
                                            <span> Took courses in the following:</span>
                                            <div className = "courses">
                                                <li>Computer Architecture</li>
                                                <li>Data Structures</li>
                                                <li>Embedded Systems</li>
                                                <li>Software Design</li>
                                                <li>Circuit Theory</li>
                                                <li>Mathematics</li>
                                                <li>Physics</li>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                            </div>
                        </div>
                    </div>
                    <div style={{ float: 'left' }}>
                        <img src={fam} style={{ width: '50vh', borderRadius: '10px', marginLeft: '10vh', marginTop: '2vh' }} alt="Family" />
                        <p className = 'caption' > Me and my family on graduation day!</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
export default Education;