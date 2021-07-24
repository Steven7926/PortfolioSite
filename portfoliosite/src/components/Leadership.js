import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-reveal";
import ucf from '../assets/UCFlogo.png';
import magicmeds from '../assets/magicmeds.png';
import magicmedsapp from '../assets/MagicMedsApp.jpg';
import acm from '../assets/ACM.png';

function Leadership() {
    return (
     <div id="leadership" className="head projectstop" style={{ marginBottom: '5vh'}}>
        <Fade bottom duration={2000} distance="40px">          
                <div>
                    <span style={{ fontSize: '50px', marginLeft: '5px' }}><b>Leadership </b></span>
                    <FontAwesomeIcon icon={faChalkboardTeacher} size='3x' style={{ marginLeft: '5px' }} />
                </div>
                <div>
                    <div className="ucfACM">
                        <div style={{ marginTop: '15px' }}>
                            <div>
                                <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>Association of Computer Machinery <span className = "ACMack">(ACM)</span></b> </span>
                                <span style={{ marginLeft: '16px'}}><img src={ucf} style={{ width: '10vh', marginRight: '20px', float: 'right' }} alt="UCF Logo" /></span>
                            </div>
                            <div>
                                <span className = "responsibility"><b>Web & Mobile Dev Director</b></span>
                            </div>
                        </div>
                        <div>
                            <div className = "ACMLead">
                                    <br />
                                    <img src={acm} className = "ucfACMlogo" alt="ACM Logo" />
                                    <br />
                            </div>
                            <div style={{ marginLeft: '5vh', float: 'left' }}>
                                    <br />
                                    <ul>
                                        <li><span>Teach students the fundamentals of <br /> web and mobile development.</span></li>
                                        <br />
                                        <li><span>Introduce basic front end and back <br /> end development concepts to club members.</span></li>
                                        <br />
                                        <li><span>Promote fun side projects and help <br /> club members who pursued them.</span></li>
                                        <br />
                                        <li><span>Answer any questions club members <br />had about development.</span></li>     
                                        <br/>
                                        <li style={{ marginBottom: '58px' }}><span>Teach and run workshops on<br />introduction web development material.</span></li>
                                        
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{ float: 'left' }}>
                        <div class="teamlead">
                            <div style={{ marginTop: '15px' }}>
                                <div>
                                    <span style={{ fontSize: '40px', marginLeft: '40px' }}><b>Team Leader</b> </span>
                                    <img src={magicmeds} style={{ width: '10vh', marginRight: '20px', float: 'right' }} alt="MagicMeds Logo" />
                                </div>
                                <div>
                                    <span style={{ fontSize: '25px', marginLeft: '8vh' }}><b>Team Leader on Senior Design Project</b></span>
                                </div>
                            </div>
                            <div>
                                <div style={{ float: 'left'}}>                                  
                                        <br />                                       
                                        <ul>
                                            <li><span>Schedule and coordinate <br /> tasks and responsibilities <br /> to ensure deadlines were met.</span></li>
                                            <br />
                                            <li><span>Motivate team members and <br /> manage time efficiently. </span></li>
                                            <br />
                                            <li><span>Provide ideas and possible <br /> solutions to road blocks that <br /> team members faced. </span></li>
                                            <br />     
                                            <li><span>Promote teamwork and efficiency <br />  in a healthy team setting </span></li>
                                        </ul>
                                        <br />
                                </div>
                                <div style={{ float: 'left' }}>
                                        <br />
                                        <img src={magicmedsapp} style={{ width: '22vh', marginLeft: '170px', float: 'right', borderRadius: '5px' }} alt="MagicMeds App" />
                                        <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
        </Fade>
     </div>
    );
}
export default Leadership;