import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-reveal";
import theraplan from '../assets/TheraplanLogo.png';


function WorkExperience() {
    return (
        <div className = 'flex flex-col px-10' id="workexperience">
            <Fade bottom duration={2000} distance="40px">            
                <div className="pb-2">
                    <span className = "pr-2" >Work Experience</span>
                    <FontAwesomeIcon icon={faBriefcase} size='2x' className=""/>
                </div>
                <div className="bg-theraplan rounded-lg shadow-lg font-mono">
                    <div className = "flex flex-row px-10 py-5">
                        <a className="w-1/2 hover:scale-105 transition-all ease-in-out" href="https://theraplan.com"><b>TheraPlan</b> - Developer, Tester, and Support Specialist </a>
                        <span className = "w-1/2 flex justify-end" ><b>June 2017 - Present</b></span>
                    </div>
                    <div className = "flex flex-row">                       
                            <ul className="px-10 py-5 text-nowrap">
                                <li>0. Test code modifications using black box and glass box testing to prepare for a production candidate. </li>
                                <li>1. Provide solutions and assistance to clients who reach out to the help desk.</li>
                                <li>0. Document software bugs, enhancements, and end user requests using Azure Dev Ops.</li>
                                <li>1. Help design test plans, scenarios, scripts, and procedures.</li>
                                <li>1. Complete full stack development tasks in Visual Studio using C#, JavaScript, SQL, HTML, and CSS</li>
                                <li>1. Monitor databases and record business intelligence metrics to ensure exceptions and outliers are caught.</li>
                                <li>0. Build views, query tables, and maintain stored procedures in SQL Server Management Studio.</li>
                                <li>0. Create and maintain SSRS reports in Visual Studio using datasets and deploy them to the report server.</li>
                                <li>0. Integrated SSRS reports into web app so that no external web portal is needed to run system reports. </li>
                                <li>1. Responsible for writing a C# program that cut the deployment time of reports in half.</li>
                            </ul>
                            
                            <span className="w-1/3 flex justify-end p-5"><img src={theraplan} className = "rounded-lg"  alt="TheraPLan Logo" /></span>
                    </div>
                </div>
            
            </Fade>
        </div>
    );
}
export default WorkExperience;