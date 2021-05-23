import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-reveal";
import ucf from '../assets/UCFlogo.png';
import fam from '../assets/fam.jpg';


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
                <div style={{ overflow: 'hidden' }}>
                    <div className="magicmed">
                        <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                            <div>
                                <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>MagicMeds</b> </span>
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
                        </div>
                    </div>
                    <div style={{ float: 'left' }}>
                        <div class="onlysocks">
                            <div style={{ overflow: 'hidden', marginTop: '15px' }}>
                                <div>
                                    <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>OnlySocks</b> </span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '30px', marginLeft: '15vh' }}><b>A social media platform for socks</b></span>
                                </div>
                            </div>
                            <div style={{ overflow: 'hidden' }}>                              
                                <div style={{ marginRight: '5vh', float: 'right' }}>
                                    <Fade left duration={2000} distance="40px">
                                        <br />
                                        
                                        <br />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </Fade>
    );
}
export default Projects;