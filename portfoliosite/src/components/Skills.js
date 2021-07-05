import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from "@ramonak/react-progress-bar";
import { faLaptopCode, faDatabase, faFire, faLeaf  } from '@fortawesome/free-solid-svg-icons'
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
        <div id="skills">
            <Fade bottom duration={2000} distance="40px">
                <div className="head">
                    <br />
                    <br />
                    <div className= "skillshead">
                        <span style={{ fontSize: '50px', marginLeft: '5px' }}><b>Skills </b></span>
                        <FontAwesomeIcon icon={faLaptopCode} size='3x' style={{ marginLeft: '5px' }} />
                    </div>
                    <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                        <div className="skills">
                            <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                                <div class="skillslang">
                                    <span><b>Frameworks, Libraries, and Technologies</b></span>
                                </div>
                                <div style={{ overflow: 'hidden' }}>    
                                    <div style={{ marginLeft: '60px' }}>
                                        <div style={{ float: 'left' }}>
                                            <FontAwesomeIcon icon={faBootstrap} size='3x' style={{ marginLeft: '35px' }} />
                                            <p className="iconcap">BootStrap</p>
                                        </div>
                                        <div style={{ float: 'left' }}>
                                            <FontAwesomeIcon icon={faNpm} size='3x' style={{ marginLeft: '15px' }} />
                                            <p className="iconcapsm">npm</p>
                                        </div>
                                        <div style={{ float: 'left' }}>
                                            <FontAwesomeIcon icon={faNode} size='3x' style={{ marginLeft: '30px' }} />
                                            <p className="iconcapsm" style={{ marginLeft: '40px' }}>Node</p>
                                        </div>
                                        <div style={{ float: 'left' }}>
                                            <FontAwesomeIcon icon={faVuejs} size='3x' style={{ marginLeft: '30px' }} />
                                            <p className="iconcapsm" style={{ marginLeft: '40px' }}>Vue</p>
                                        </div>
                                        <div style={{ float: 'left' }}>
                                            <FontAwesomeIcon icon={faReact} size='3x' style={{ marginLeft: '80px' }} />
                                            <p className="iconcapsm">React/React Native</p>
                                        </div>
                                        <div style={{ float: 'left' }}>
                                            <FontAwesomeIcon icon={faAngular} size='3x' style={{ marginLeft: '30px' }} />
                                            <p className="iconcapsm">Angular</p>
                                        </div>
                                        <div style={{ float: 'left' }}>
                                            <FontAwesomeIcon icon={faMicrosoft} size='3x' style={{ marginLeft: '25px' }} />
                                            <p className="iconcapsm" style={{ marginLeft: '25px' }}>Azure</p>
                                        </div>
                                        <div style={{ float: 'left' }}>
                                            <FontAwesomeIcon icon={faAws} size='3x' style={{ marginLeft: '25px' }} />
                                            <p className="iconcapsm" style={{ marginLeft: '40px' }}>AWS</p>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: '60px' }}>
                                        <div div style={{ float: 'left', marginLeft: '15px'}}>
                                            <img src={express} style={{ width: '15vh', borderRadius: '10px'}} alt="Express" />
                                         </div>
                                        <div div style={{ float: 'left', marginLeft: '9vh'  }}>
                                            <img src={mongodb} style={{ width: '25vh'}} alt="MongoDB" />
                                        </div>
                                        <div div style={{ float: 'left', marginLeft: '6vh'}}>
                                            <img src={jquery} style={{ width: '25vh' }} alt="jQuery" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="skillsmark" style={{ marginLeft: '5vh', marginBottom: '10px' }}>
                            <div class= "skillslang">
                                <span><b>Languages and Markup</b></span>
                            </div>
                            <div style={{ marginLeft: '40px'}}>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faHtml5} size='3x' style={{ marginLeft: '30px' }} />
                                    <p className="iconcap" style={{ marginLeft: '20px' }}>HTML5</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faCss3Alt} size='3x' style={{ marginLeft: '40px' }} />
                                    <p className="iconcap" style={{ marginLeft: '40px' }}>CSS3</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faJsSquare} size='3x' style={{ marginLeft: '50px' }} />
                                    <p className="iconcapsm" style={{ marginLeft: '30px' }}>JavaScript</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faDatabase} size='3x' style={{ marginLeft: '40px' }} />
                                    <p className="iconcapsm" style={{ marginLeft: '50px' }}>SQL</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faJava} size='3x' style={{ marginLeft: '40px' }} />
                                    <p className="iconcapsm" style={{ marginLeft: '40px' }}>Java</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faPython} size='3x' style={{ marginLeft: '40px' }} />
                                    <p className="iconcapsm" style={{ marginLeft: '30px' }}>Python</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faPhp} size='3x' style={{ marginLeft: '40px' }} />
                                    <p className="iconcapsm" style={{ marginLeft: '60px' }}>PHP</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faErlang} size='3x' style={{ marginLeft: '40px' }} />
                                    <p className="iconcapsm" style={{ marginLeft: '50px' }}>Erlang</p>
                                </div>    
                            </div>
                            <div style={{ marginLeft: '15vh', marginTop: '186px'  }}>
                                <div style={{ float: 'left' }}>
                                    <img src={C} className= "cicon" alt="C" />
                                    <p className="ccom">C</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <img src={Csharp} className="csharpicon" alt="C#" />
                                    <p className="csharpcom">C#</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <img src={Cplus} className="cplusplusicon" alt="C++" />
                                    <p className="cpluscom">C++</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <img src={haskell} style={{ width: '7vh', marginLeft: '5px' }} alt="haskell" />
                                    <p className="iconcapsm" style={{ marginLeft: '5px' }}>Haskell</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faJsSquare} size='3x' style={{ marginLeft: '35px' }} />
                                    <p className="iconcapsm" style={{ marginLeft: '30px' }}>MIPS32</p>
                                </div>
                                <div style={{ float: 'left' }}>
                                    <FontAwesomeIcon icon={faJsSquare} size='3x' style={{ marginLeft: '25px' }} />
                                    <p className="iconcapsm" style={{ marginLeft: '25px' }}>Verilog</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <b>Confidence with Languages</b>
                        <br />
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>JavaScript: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={95} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>SQL: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={90} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>Java: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={90} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>C: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={85} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>Python: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={85} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>C#: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={80} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>PHP: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={70} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>Erlang: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={60} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>MIPS32: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={60} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>C++: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={40} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>Haskell: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={40} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'left' }}><b>Verilog: </b></span>
                            <div style={{ marginLeft: '12vh' }}>
                                <ProgressBar completed={30} width={900} isLabelVisible={false} style={{ marginLeft: '5vh' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
export default Skills;