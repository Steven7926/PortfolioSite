import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Fade, Bounce } from "react-reveal";
import theraplan from '../assets/TheraplanLogo.png';


function WorkExperience() {
    return (
        <div className="head" id="workexperience">
            <Fade bottom duration={2000} distance="40px">
            
                <div style={{width: '100%' }}>
                    <span className = "workexp" ><b>Work Experience </b></span>
                    <FontAwesomeIcon icon={faBriefcase} size='3x' style={{ marginLeft: '5px' }}/>
                </div>
                <div className = "theraplan">
                    <div style={{ overflow: 'hidden', marginTop: '15px'}}>
                        <div className = "pushleft">
                                <span className = "tphead" ><b>TheraPlan</b> - Developer, Tester, and Support Specialist </span>                    
                        </div>
                        <div style={{ float: 'left' }}>
                            <span className = "lengththere" ><b>June 2017 - Present</b></span>
                        </div>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <div className = "worktext">                          
                                <ul>
                                    <li>Test code modifications using black box and glass box testing to prepare for a production candidate. </li>
                                    <li>Provide solutions and assistance to clients who reach out to the help desk.</li>
                                    <li>Document software bugs, enhancements, and end user requests using Azure Dev Ops.</li>
                                    <li>Help design test plans, scenarios, scripts, and procedures.</li>
                                    <li>Complete full stack development tasks in Visual Studio using C#, JavaScript, SQL, HTML, and CSS</li>
                                    <li>Monitor databases and record business intelligence metrics and ensure exceptions and outliers are caught.</li>
                                    <li>Build views, query tables, and maintain stored procedures in SQL Server Management Studio.</li>
                                    <li>Create and maintain SSRS reports in Visual Studio using datasets and deploy them to the report server.</li>
                                    <li>Responsible for integrating SSRS reports into the web app so that no external web portal is needed to run system reports. </li>
                                    <li>Responsible for writing a C# program that cut the deployment time of reports in half.</li>
                                </ul>   
                        </div>
                        <div>
                            <img src={theraplan} className = "worklogo"  alt="TheraPLan Logo" />
                        </div>
                    </div>
                </div>
            
            </Fade>
        </div>
    );
}
export default WorkExperience;