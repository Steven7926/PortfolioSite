import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-awesome-reveal";
import ucf from '../assets/UCFlogo.png';
import magicmeds from '../assets/magicmeds.png';
import magicmedsapp from '../assets/MagicMedsApp.jpg';
import acm from '../assets/ACM.png';

function Leadership() {
    return (
        <div className='p-8 flex flex-col'>
            <Fade duration={1000} direction="up" cascade triggerOnce = {true}>
                <div className = 'flex justify-center'>
                    <span className='px-2 pt-2'>Leadership</span>
                    <FontAwesomeIcon icon={faChalkboardTeacher} size='2x'/>
                </div>

                <div className="pt-8 flex flex-col items-center">
                    <a className="hover:scale-110 transition-transform" href="https://ucfacmw.org/" ><b>Association of Computer Machinery (ACM)</b></a>
                    <span className = "responsibility"><b>Web & Mobile Dev Director</b></span>
                </div>
                <div className = 'flex flex-row flex-wrap  items-center justify-center'>
                    <img src={acm} className = "w-2/12 h-2/6 rounded-2xl" alt="ACM Logo" />
                    <div className='px-8'>
                        <li>Teach students the fundamentals of  web and mobile development.</li>
                        <li>Introduce basic front end and back end development concepts to club members.</li>
                        <li>Promote fun side projects and help club members who pursued them.</li>
                        <li>Answer any questions club members had about development.</li>     
                        <li>Teach and run workshops on introduction web development material.</li>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className = 'flex flex-row justify-center items-center'>
                        <a className='font-bold hover:scale-110 transition-transform' href="https://www.cecs.ucf.edu/SeniorDesignShowcase/team/magicmeds-automatic-pill-dispenser/" >Team Leader</a>
                        <img className = 'w-3/12' src={magicmeds} alt="MagicMeds Logo" />
                    </div>
                    <span className='font-bold'>Team Leader on Senior Design Project</span>
                </div>
                <div className = 'flex phone:flex-row flex-col justify-center items-center p-5'>               
                    <img src={magicmedsapp} className = 'w-2/12 rounded-xl' alt="MagicMeds App" />
                    <div className = 'p-6'>                                                        
                        <li>Schedule and coordinate tasks and responsibilities to ensure deadlines were met.</li>
                        <li>Motivate team members and manage time efficiently.</li>
                        <li>Provide ideas and possible solutions to road blocks that team members faced.</li>  
                        <li>Promote teamwork and efficiency in a healthy team setting</li>                     
                    </div>
                </div>
            </Fade>
        </div>
    );
}
export default Leadership;