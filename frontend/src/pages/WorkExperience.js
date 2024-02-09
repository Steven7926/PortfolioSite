import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-reveal";
import theraplan from '../assets/TheraplanLogo.png';
import iex from '../assets/IEX.svg';
import ui from '../assets/UI.jpg';


function WorkExperience() {
    return (
        <div className = 'flex flex-col px-10' id="workexperience">
            <Fade bottom duration={2000} distance="40px">            
                <div className="pb-2">
                    <span className = "pr-2" >Work Experience</span>
                    <FontAwesomeIcon icon={faBriefcase} size='2x' className=""/>
                </div>
                <div className="flex flex-row">
                    <div className="bg-theraplan rounded-lg shadow-lg font-mono mr-10 w-1/2">
                        <div className = "flex flex-row px-10 py-5">
                            <a className="w-1/2 hover:scale-105 transition-all ease-in-out" href="https://theraplan.com"><b>TheraPlan</b> - Developer, Tester, and Support Specialist </a>
                            <span className = "w-1/2 flex justify-end" ><b>June 2017 - September 2021</b></span>
                        </div>
                        <div className = "flex flex-row">                                                  
                                <span className="w-1/2 p-5"><img src={theraplan} className = "rounded-lg"  alt="TheraPLan Logo" /></span>
                                <span className="p-5"><img src={ui} className = "rounded-lg"  alt="TheraPLan Logo" /></span>
                        </div>
                    </div>
                    <div className="bg-black rounded-lg shadow-lg font-mono w-1/2">
                        <div className = "flex flex-row px-10 py-5">
                            <a className="w-1/2 hover:scale-105 transition-all ease-in-out" href="https://ironeaglex.com/"><b>Iron EagleX Inc.</b> - Full Stack Engineer </a>
                            <span className = "w-1/2 flex justify-end" ><b>September 2021 - Present</b></span>
                        </div>
                        <div className = "flex flex-row">                                                  
                                <span className="w-1/3 flex justify-end p-5"><img src={iex} className = "rounded-lg"  alt="IEX Logo" /></span>
                        </div>
                    </div>
                </div>
              
            
            </Fade>
        </div>
    );
}
export default WorkExperience;