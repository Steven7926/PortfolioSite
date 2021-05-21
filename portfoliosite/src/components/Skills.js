import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from "@ramonak/react-progress-bar";
import { faLaptopCode, faStar, faBriefcase, faProjectDiagram, faChalkboardTeacher, faDatabase, faFire, faLeaf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faNode, faJsSquare, faHtml5, faCss3Alt, faBootstrap, faNpm, faMicrosoft, faAws, faVuejs, faAngular, faJava, faPython, faErlang, faReact, faPhp } from '@fortawesome/free-brands-svg-icons';
import { Fade, Bounce } from "react-reveal";
import express from '../assets/expressjs.png';
import jquery from '../assets/jquery.png';
import mongodb from '../assets/mongodb.png';
import C from '../assets/C.png';
import Cplus from '../assets/c++.png';
import Csharp from '../assets/C-Sharp.png';
import haskell from '../assets/haskell.png';

function Skills() {
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="head" id="skills">
                <br />
                <br />
                <div className= "skillshead">
                    <span style={{ fontSize: '50px', marginLeft: '5px' }}><b>Skills </b></span>
                    <FontAwesomeIcon icon={faLaptopCode} size='3x' style={{ marginLeft: '5px' }} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <div className="skills">
                        <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                            <div class="skillslang">
                                <span><b>Frameworks, Libraries, and Technologies</b></span>
                            </div>
                            <div style={{ overflow: 'hidden' }}>                               
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faBootstrap} size='3x' style={{ marginLeft: '35px' }} />
                                    <p className="iconcap">BootStrap</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faNpm} size='3x' style={{ marginLeft: '15px' }} />
                                    <p className="iconcapsm">npm</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faNode} size='3x' style={{ marginLeft: '15px' }} />
                                    <p className="iconcapsm">Node</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faVuejs} size='3x' style={{ marginLeft: '15px' }} />
                                    <p className="iconcapsm">Vue</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faReact} size='3x' style={{ marginLeft: '80px' }} />
                                    <p className="iconcapsm">React/React Native</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faAngular} size='3x' style={{ marginLeft: '15px' }} />
                                    <p className="iconcapsm">Angular</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faMicrosoft} size='3x' style={{ marginLeft: '15px' }} />
                                    <p className="iconcapsm">Azure</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faAws} size='3x' style={{ marginLeft: '15px' }} />
                                    <p className="iconcapsm">AWS</p>
                                </div>
                                <div div style={{ float: 'left', marginLeft: '15px', marginTop: '3vh' }}>
                                    <img src={express} style={{ width: '15vh', borderRadius: '10px'}} alt="Express" />
                                 </div>
                                <div div style={{ float: 'left', marginLeft: '8vh'  }}>
                                    <img src={mongodb} style={{ width: '25vh'}} alt="MongoDB" />
                                </div>
                                <div div style={{ float: 'left', marginLeft: '6vh'}}>
                                    <img src={jquery} style={{ width: '25vh' }} alt="jQuery" />
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
                    <div className="skillsmark" style={{ marginLeft: '20vh' }}>
                        <div class= "skillslang">
                            <span><b>Languages and Markup</b></span>
                        </div>
                        <div style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faHtml5} size='3x' style={{ marginLeft: '30px' }} />
                            <p className="iconcap" >HTML5</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faCss3Alt} size='3x' style={{ marginLeft: '20px' }} />
                            <p className="iconcap">CSS3</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faJsSquare} size='3x' style={{ marginLeft: '15px' }} />
                            <p className="iconcapsm">JavaScript</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faDatabase} size='3x' style={{ marginLeft: '20px' }} />
                            <p className="iconcapsm">SQL</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faJava} size='3x' style={{ marginLeft: '15px' }} />
                            <p className="iconcapsm">Java</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faPython} size='3x' style={{ marginLeft: '15px' }} />
                            <p className="iconcapsm">Python</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faPhp} size='3x' style={{ marginLeft: '15px' }} />
                            <p className="iconcapsm">PHP</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faErlang} size='3x' style={{ marginLeft: '15px' }} />
                            <p className="iconcapsm">Erlang</p>
                        </div>                        
                        <div style={{ float: 'left' }}>
                            <img src={C} style={{ width: '10vh'}} alt="C" />
                            <p className="iconcapsm">C</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <img src={Csharp} style={{ width: '13vh'}} alt="C#" />
                            <p className="iconcapsm">C#</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <img src={Cplus} style={{ width: '13vh'}} alt="C++" />
                            <p className="iconcapsm">C++</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <img src={haskell} style={{ width: '8vh' }} alt="haskell" />
                            <p className="iconcapsm">Haskell</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faJsSquare} size='3x' style={{ marginLeft: '15px' }} />
                            <p className="iconcapsm">MIPS32</p>
                        </div>
                        <div style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faJsSquare} size='3x' style={{ marginLeft: '15px' }} />
                            <p className="iconcapsm">Verilog</p>
                        </div>
                    </div>
                </div>
                <div>
                    <b>Knowledge of Languages</b>
                    <br />
                    <p> <b>C#: </b><ProgressBar completed={60} width={900} isLabelVisible={false} /></p>
                    
                </div>
            </div>
        </Fade>
    );
}
export default Skills;