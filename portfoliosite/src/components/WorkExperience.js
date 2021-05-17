import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faLaptopCode, faStar, faBriefcase, faProjectDiagram, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Fade, Bounce } from "react-reveal";


function Introduction() {
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="head" id = "workexperience">
                <br />
                <br />
                <div style={{ border: '2px solid darkgrey', borderRadius: '5px', backgroundColor: 'darkgrey', boxShadow: '10px 5px 5px black' }}>
                    <span style={{ fontSize: '50px', marginLeft: '5px' }}><b>Work Experience </b></span>
                    <FontAwesomeIcon icon={faBriefcase} size = '3x'/>
                </div>
                <div className = "theraplan">
                    <div style={{ overflow: 'hidden', marginTop: '15px'}}>
                        <div style={{float: 'left'}}>
                                <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>TheraPlan</b> - Developer, Tester, and Support Specialist </span>                    
                        </div>
                        <div style={{ float: 'left' }}>
                            <span style={{ fontSize: '30px', marginLeft: '52vh'}}><b>June 2017 - Present</b></span>
                        </div>
                    </div>
                    <div style={{ fontSize: '20px', marginLeft: '80px' }}>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <Bounce left duration={2000} distance="40px">
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                        </Bounce>
                    </div>
                </div>
                <div>
                    <p>More Coming Soon...</p>
                </div>
            </div>
        </Fade>
    );
}
export default Introduction;