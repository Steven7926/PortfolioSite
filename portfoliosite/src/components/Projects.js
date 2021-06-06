import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-reveal";
import magicmeds from '../assets/magicmeds.png';
import sock from '../assets/sock.png';


function Projects() {
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="head" id="projects">
                <br />
                <br />
                <div style={{ width: '80vh' }}>
                    <span style={{ fontSize: '50px', marginLeft: '5px' }}><b>Projects </b></span>
                    <FontAwesomeIcon icon={faProjectDiagram} size='3x' style={{ marginLeft: '5px' }} />
                </div>
                <div>
                    <div className="magicmed">
                        <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                            <div>
                                <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>MagicMeds</b> </span>
                                <img src={magicmeds} style={{ width: '10vh', marginRight: '50px', float: 'right' }} alt="MagicMeds Logo" />
                            </div>
                            <div>
                                <span style={{ fontSize: '30px', marginLeft: '15vh' }}><b>An Automatic Pill Dispenser</b></span>
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <div style={{ marginRight: '5vh', float: 'right' }}>
                                <Fade left duration={2000} distance="40px">
                                    <br />
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-0bP6SvqajM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <br />                                   
                                </Fade>
                            </div>
                            <div style={{ marginLeft: '5vh', float: 'left' }}>
                                <Fade left duration={2000} distance="40px">
                                    <br />
                                    <ul>
                                        <li><span>MERN stack based mobile app for <br />scheduiling pills and sending <br />notifications to both users and caregivers</span></li>
                                        <br/>
                                        <li><span>Python script running on Raspberry Pi for <br />running GUI and contacting database <br />for scheduling data.</span></li>
                                        <br />
                                        <li><span>Custom designed motor controller PCB <br />with Atmega328 receiving data via SPI<br /> from the Raspberry Pi.</span></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div style={{ float: 'left' }}>
                        <div class="onlysocks">
                            <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                                <div>
                                    <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>OnlySocks</b> </span>
                                    <img src={sock} style={{ width: '10vh', marginRight: '10px', float: 'right' }} alt="OnlySock Logo" />
                                </div>
                                <div>
                                    <span style={{ fontSize: '30px', marginLeft: '10vh' }}><b>A social media platform for socks</b></span>
                                </div>
                            </div>
                            <div style={{ overflow: 'hidden' }}>                              
                                <div style={{ marginRight: '5vh', float: 'right' }}>
                                    <Fade left duration={2000} distance="40px">
                                        <br />
                                        <ul>
                                            <li><span>MERN stack based mobile/web app <br />mimicking social media apps but <br />users can only post about socks.</span></li>
                                            <br />
                                            <li><span>AWS and S3 used for hosting <br />and storing photos.</span></li>
                                            <br />
                                            <li><span>Features such as forgot password,  <br />followers, statuses, likes,  profile  <br />pictures implemented. </span></li>
                                        </ul>
                                        <br />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />                
                <div className="contactmanager">
                    <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                        <div style={{ float: 'left'}}>
                            <div>
                                <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>Conatct Manager</b> </span>
                            </div>
                            <div>
                                <span style={{ fontSize: '30px', marginLeft: '15vh' }}><b>A simple contact manager</b></span>
                            </div>                     
                            <div style={{ marginLeft: '5vh'}}>
                                <Fade left duration={2000} distance="40px">
                                    <br />
                                    <ul>
                                        <li><span>LAMP stack based web app for <br /> managing contacts. </span></li>
                                        <br />
                                        <li><span>jQuery Datatables for easy data manipulation.</span></li>
                                        <br />
                                        <li><span>Add and delete contacts.</span></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                        <div style={{ marginRight: '5vh', float: "right" }}>
                            <div>
                                <span style={{ fontSize: '40px', marginLeft: '0px' }}><b>Event Manager</b> </span>
                            </div>
                            <div>
                                <span style={{ fontSize: '30px', marginLeft: '15vh' }}><b>A simple event manager.</b></span>
                            </div>
                            <div style={{ marginLeft: '5vh', float: 'left' }}>
                                <Fade left duration={2000} distance="40px">
                                    <br />
                                    <ul>
                                        <li><span>LAMP stack based web app for <br /> managing events. </span></li>
                                        <br />
                                        <li><span>Different user types implemented <br />for event hosts, admin, and event attendees. </span></li>
                                        <br />
                                        <li><span>Add and delete events for approval<br /> by an admin user.</span></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>

    );
}
export default Projects;