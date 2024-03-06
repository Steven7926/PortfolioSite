import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-reveal";
import ucf from '../assets/UCFlogo.png';
import fam from '../assets/fam.jpg';


function Education() {
    return (
        <div id="education">
            <Fade bottom duration={2000} distance="40px">
                <div className='px-8'>
                    <div className='flex justify-center items-center'>
                        <span className='pt-4 px-2'>Education</span>
                        <FontAwesomeIcon icon={faUniversity} size='2x' />
                    </div>
                    <div className='flex flex-col'>                        
                        <div className='flex justify-center items-center'>
                            <a href="https://ucf.edu"><b>University of Central Florida</b> </a>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span><b>Fall 2017 - Spring 2021</b></span>
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                            <img className= 'w-1/6' src={ucf} alt="UCF Logo" />
                            <div>
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
                                    <div>
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
                        <div className='flex flex-col justify-center items-center'>
                            <img src={fam} className = 'w-1/6' alt="Family" />
                            <p> Me and my family on graduation day!</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
export default Education;