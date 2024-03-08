import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-awesome-reveal";
import ucf from '../assets/UCFlogo.png';
import fam from '../assets/fam.jpg';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import magicmeds from '../assets/magicmeds.png';
import magicmedsapp from '../assets/MagicMedsApp.jpg';
import acm from '../assets/ACM.png';

function Education() {
    return (
        <div id="education" className='flex flex-col'>
            <div className='px-8'>
                <Fade duration={1000} direction="up" triggerOnce = {true} cascade fraction={0} damping={0}>
                    <div className='flex justify-center items-center'>
                        <span className='pt-4 px-2'>Education</span>
                        <FontAwesomeIcon icon={faUniversity} size='2x' />
                    </div>              
                    <div className='flex justify-center items-center p-2'>
                        <a href="https://ucf.edu" className='hover:scale-110 transition-transform'><b>University of Central Florida</b> </a>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span><b>Fall 2017 - Spring 2021</b></span>
                    </div>
                    <div className='flex phone:flex-row flex-col p-2 flex-wrap justify-center items-center'>
                        <img className='phone:w-1/4 w-6/12' src={ucf} alt="UCF Logo" />
                        <div className='phone:p-8 pb-4 ml-0 phone:ml-6'>
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
                        <img src={fam} className = 'phone:w-1/4 w-8/12 rounded-3xl' alt="Family" />                      
                    </div>
                    <div className = 'flex justify-center pt-4'>
                        <span className='px-2 pt-2'>Leadership</span>
                        <FontAwesomeIcon icon={faChalkboardTeacher} size='2x'/>
                    </div>
                    <div className=" pt-2 flex flex-col items-center">
                        <a className="hover:scale-110 transition-transform" href="https://ucfacmw.org/" ><b>Association of Computer Machinery (ACM)</b></a>
                        <span className = "responsibility"><b>Web & Mobile Dev Director</b></span>
                    </div>
                    <div className = 'flex flex-row flex-wrap  items-center justify-center'>
                        <img src={acm} className = "phone:w-2/12 phone:h-2/6 w-6/12 h-full rounded-2xl mt-4" alt="ACM Logo" />
                        <ul className='p-4 phone:p-12 list-disc text-left inline-block'>
                            <li>Teach students the fundamentals of  web and mobile development.</li>
                            <li>Introduce basic front end and back end development concepts to club members.</li>
                            <li>Promote fun side projects and help club members who pursued them.</li>
                            <li>Answer any questions club members had about development.</li>     
                            <li>Teach and run workshops on introduction web development material.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className = 'flex flex-row justify-center items-center'>
                            <a className='font-bold hover:scale-110 transition-transform' href="https://www.cecs.ucf.edu/SeniorDesignShowcase/team/magicmeds-automatic-pill-dispenser/" >Team Leader</a>
                            <img className = 'w-3/12' src={magicmeds} alt="MagicMeds Logo" />
                        </div>
                        <span className='font-bold'>Team Leader on Senior Design Project</span>
                    </div>
                    <div className = 'flex phone:flex-row flex-col justify-center items-center phone:ml-10'>               
                        <img src={magicmedsapp} className = 'phone:w-2/12 w-7/12 rounded-xl mt-4' alt="MagicMeds App" />
                        <ul className = 'p-4 phone:p-12 list-disc text-left inline-block'>                                                        
                            <li>Schedule and coordinate tasks and responsibilities to ensure deadlines were met.</li>
                            <li>Motivate team members and manage time efficiently.</li>
                            <li>Provide ideas and possible solutions to road blocks that team members faced.</li>  
                            <li>Promote teamwork and efficiency in a healthy team setting</li>                     
                        </ul>
                    </div>
                </Fade>    
            </div>
        </div>
    );
}
export default Education;