import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-reveal";
import theraplan from '../assets/TheraplanLogo.png';
import iex from '../assets/IEX.svg';


function WorkExperience() {
    return (
        <div className='flex-col p-6' id="workexperience">
            <Fade bottom duration={2000} distance="40px">            
                <div className="pb-2 phone:ml-56">
                    <span className = "pr-3">Work</span>
                    <FontAwesomeIcon icon={faBriefcase} size='2x' className=""/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-black rounded-lg shadow-lg font-mono phone:w-3/4">
                        <div className = "flex flex-row phone:px-10 phone:py-5 px-1 py-1">
                            <a className="w-1/2 hover:scale-105 transition-all ease-in-out" href="https://ironeaglex.com/"><b>Iron EagleX</b>: Full Stack Engineer </a>
                            <span className = "w-1/2 flex justify-end px-1"><b>September 2021 - Present</b></span>
                        </div>
                        <div className = "flex phone:flex-row flex-col phone:px-10">                                                  
                            <div className="phone:w-1/3 w-4/4 p-2 phone:py-5">
                                <img src={iex} className = "rounded-lg block w-1/2 phone:w-auto ml-auto mr-auto"  alt="IEX Logo" />
                            </div>
                            <div className='flex'>
                                <span className='p-4'>
                                    Here I worked on many different contracts and learned a lot about large scale microservice based
                                    applications and how to work in smaller teams as part of a larger application therough a SAFe Agile workflow.
                                </span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="bg-theraplan rounded-lg shadow-lg font-mono phone:w-3/4">
                        <div className = "flex flex-row phone:px-10 phone:py-5 px-1 py-1">
                            <a className="w-1/2 hover:scale-105 transition-all ease-in-out" href="https://theraplan.com"><b>TheraPlan</b>: Developer, Tester, and Support Specialist </a>
                            <span className = "w-1/2 flex justify-end px-2"><b>June 2017 - September 2021</b></span>
                        </div>
                        <div className = "flex phone:flex-row flex-col phone:px-10">                                                  
                                <div className="phone:w-1/3 w-4/4 p-2 phone:py-5">
                                    <img src={theraplan} className = "rounded-lg block w-1/2 phone:w-auto ml-auto mr-auto"  alt="TheraPLan Logo" />
                                </div>
                                <div className = 'flex flex-col'>
                                    <span className='p-4'>
                                        At TheraPlan I wore a lot of hats! Starting as a blackbox tester and support specialist early on in the softwares life,
                                        I eventually graduated into doing full time development work for the program. 
                                    </span>
                                </div>                              
                        </div>
                    </div>
                </div>    
            </Fade>
        </div>
    );
}
export default WorkExperience;