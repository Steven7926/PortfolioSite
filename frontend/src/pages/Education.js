import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-awesome-reveal";
import ucf from '../assets/UCFlogo.png';
import fam from '../assets/fam.jpg';
import Leadership from "./Leadership";


function Education() {
    return (
        <div id="education" className='flex flex-col'>
            <div className='px-8'>
                <Fade duration={1000} direction="up" triggerOnce = {true}>
                    <div className='flex justify-center items-center'>
                        <span className='pt-4 px-2'>Education</span>
                        <FontAwesomeIcon icon={faUniversity} size='2x' />
                    </div>
                </Fade>    
                <div className='flex flex-col'>
                    <Fade direction="up" duration={1000} delay={500} triggerOnce = {true}>                      
                        <div className='flex justify-center items-center p-2'>
                            <a href="https://ucf.edu" className='hover:scale-110 transition-transform'><b>University of Central Florida</b> </a>
                        </div>
                    </Fade>
                    <Fade direction="up" duration={1000} delay={1000} triggerOnce = {true}>
                        <div className='flex justify-center items-center'>
                            <span><b>Fall 2017 - Spring 2021</b></span>
                        </div>
                    </Fade>
                    <Fade direction="up" duration={1000} delay={1500} triggerOnce = {true}>
                        <div className='flex phone:flex-row flex-col p-2 flex-wrap justify-center items-center'>
                            <img className='w-1/4' src={ucf} alt="UCF Logo" />
                            <div className='phone:p-8 p-0 ml-0 phone:ml-6'>
                                    <div>
                                        <span> Major: Computer Engineering </span>
                                    </div>
                                    <div>
                                        <span> Minor: Mathematics </span>
                                    </div>
                                    <div>
                                        <span> Degree Received: Bachelors of Science</span>
                                    </div>
                                    <div>
                                        <span> GPA: 3.2 </span>
                                    </div>
                                    <span> Took courses in the following:</span>
                                    <div className='ml-8'>
                                            <li>Computer Architecture</li>
                                            <li>Data Structures</li>
                                            <li>Embedded Systems</li>
                                            <li>Software Design</li>
                                            <li>Circuit Theory</li>
                                            <li>Mathematics</li>
                                            <li>Physics</li>
                                    </div>
                            </div>
                            <img src={fam} className = 'phone:w-1/4 w-3/4 rounded-3xl pt-4' alt="Family" />                      
                        </div>
                    </Fade>
                </div>
            </div>
            <br/>
            <Leadership/>
        </div>
    );
}
export default Education;