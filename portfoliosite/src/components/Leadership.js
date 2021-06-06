import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Fade, Bounce } from "react-reveal";
import ucf from '../assets/UCFlogo.png';
import magicmeds from '../assets/magicmeds.png';
import magicmedsapp from '../assets/MagicMedsApp.jpg';
import acm from '../assets/ACM.png';

function Leadership() {
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="head" id="leadership">
                <div>
                    <span style={{ fontSize: '50px', marginLeft: '5px' }}><b>Leadership </b></span>
                    <FontAwesomeIcon icon={faChalkboardTeacher} size='3x' style={{ marginLeft: '5px' }} />
                </div>
                <div>
                    <div className="ucfACM">
                        <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                            <div>
                                <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>Association of Computer Machinery (ACM)</b> </span>
                                <img src={ucf} style={{ width: '10vh', marginRight: '90px', float: 'right' }} alt="UCF Logo" />
                            </div>
                            <div>
                                <span style={{ fontSize: '30px', marginLeft: '15vh' }}><b>Web & Mobile Dev Director</b></span>
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <div style={{ marginRight: '5vh', float: 'right' }}>
                                <Fade left duration={2000} distance="40px">
                                    <br />
                                    <img src={acm} style={{ width: '40vh', marginRight: '20px', float: 'right', borderRadius: '5px' }} alt="ACM Logo" />
                                    <br />
                                </Fade>
                            </div>
                            <div style={{ marginLeft: '5vh', float: 'left' }}>
                                <Fade left duration={2000} distance="40px">
                                    <br />
                                    <ul>
                                        <li><span>Teach students the fundamentals of <br /> web and mobile development</span></li>
                                        <br />
                                        <li><span>Introduce basic front end and back <br /> end development concepts to club members</span></li>
                                        <br />
                                        <li><span>Promote fun side projects and help <br /> club members who pursued them</span></li>
                                        <br />
                                        <li><span>Answer any questions club members <br />had about development.</span></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div style={{ float: 'left' }}>
                        <div class="teamlead">
                            <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                                <div>
                                    <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>Team Leader</b> </span>
                                    <img src={magicmeds} style={{ width: '10vh', marginRight: '20px', float: 'right' }} alt="MagicMeds Logo" />
                                </div>
                                <div>
                                    <span style={{ fontSize: '25px', marginLeft: '8vh' }}><b>Team Leader on Senior Design Project</b></span>
                                </div>
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <div style={{ marginRight: '5vh', float: 'right' }}>                                  
                                    <Fade left duration={2000} distance="40px">
                                        <br />                                       
                                        <ul>
                                            <li><span>Schedule and coordinate <br /> tasks and responsibilities <br /> to ensure deadlines were met.</span></li>
                                            <br />
                                            <li><span>Motivate team members and <br /> manage time efficiently. </span></li>
                                            <br />
                                            <li><span>Provide ideas and possible <br /> solutions to road blocks that <br /> team members faced. </span></li>
                                            <br/>
                                            <li><span>Promote teamwork and efficiency <br />  in a healthy team setting </span></li>
                                        </ul>
                                        <br />
                                    </Fade>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <Fade left duration={2000} distance="40px">
                                        <br />
                                        <img src={magicmedsapp} style={{ width: '24vh', marginLeft: '50px', float: 'right', borderRadius: '5px' }} alt="MagicMeds App" />
                                        <br />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </Fade>
    );
}
export default Leadership;