import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faStar, faBriefcase, faProjectDiagram, faChalkboardTeacher, faDatabase, faFire, faLeaf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faNode, faJsSquare, faHtml5, faCss3Alt, faBootstrap, faNpm, faMicrosoft, faAws, faVuejs, faAngular, faJava, faPython, faErlang, faReact } from '@fortawesome/free-brands-svg-icons';
import { Fade, Bounce } from "react-reveal";
import ucf from '../assets/UCFlogo.png';


function Skills() {
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="head" id="skills">
                <br />
                <br />
                <div style={{ border: '2px solid darkgrey', borderRadius: '5px', backgroundColor: 'darkgrey', boxShadow: '10px 5px 5px black', width: '80vh' }}>
                    <span style={{ fontSize: '50px', marginLeft: '5px' }}><b>Skills </b></span>
                    <FontAwesomeIcon icon={faLaptopCode} size='3x' style={{ float: 'right', marginRight: '5px' }} />
                </div>
                <div className="skills">
                    <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                        <div style={{ overflow: 'hidden' }}>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faHtml5} size='3x' style={{ marginLeft: '15px' }}/>
                                <p className = "iconp" >HTML5</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faCss3Alt} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">CSS3</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faBootstrap} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">BootStrap</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faNpm} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">npm</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faNode} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">Node</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faVuejs} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">Vue</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faReact} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">React/React Native</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faAngular} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">Angular</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faJava} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">Java</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faPython} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">Python</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faErlang} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">Erlang</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faMicrosoft} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">Azure</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faAws} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">AWS</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faDatabase} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">SQL</p>
                            </div>
                            <div style={{ float: 'left' }}>
                                <FontAwesomeIcon icon={faLeaf} size='3x' style={{ marginLeft: '15px' }} />
                                <p className="iconp">MongoDB</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <div style={{ float: 'left', width: '20vh' }}>
                            
                        </div>
                        <div style={{ marginRight: '10vh', float: 'right' }}>
                            <Bounce left duration={2000} distance="40px">
                               
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