import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faCalendar, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Fade } from "react-awesome-reveal";
import magicmeds from '../assets/magicmeds.png';
import magicmedsapp from '../assets/MagicMedsApp.jpg';
import sock from '../assets/sock.png';
import onlysocks from '../assets/OnlySocks.jpg';
import contactmanager from '../assets/ContactManager.PNG';
import eventmanager from '../assets/EventManager.PNG';
import steakations from '../assets/steakations.png'

function Projects() {
    return (
        <div id="projects" className='flex flex-col flex-wrap'>
            <Fade duration={1000} direction="up" triggerOnce = {true} cascade fraction={0} damping={0.5}>
                <div className='flex justify-center items-center mb-5'>
                    <span className='pt-4 px-2'>Projects</span>
                    <FontAwesomeIcon icon={faProjectDiagram} size='2x' />
                </div>
                <div className = 'flex flex-col justify-center items-center bg-blackClear rounded-md'>
                    <Fade duration={1000} delay={1000} direction="up" triggerOnce = {true} cascade fraction={0} damping={0.5}>
                        <a target="_blank" className='hover:scale-110 transition-transform flex flex-row justify-center items-center mt-5' href="https://github.com/Steven7926/PillDispenserMobile" >
                            <span className='font-bold '>MagicMeds</span>
                            <img className='h-4/12 w-4/12' src={magicmeds} alt="MagicMeds Logo" />
                        </a>
                        <div className='flex flex-row justify-center items-center'>
                            <span className = 'phone:ml-0 ml-4'>An automatic pill dispenser with complete medication scheduling and caregiver abilities.</span>
                        </div>
                        <div className = 'flex phone:flex-row flex-col pt-3'>
                            <FontAwesomeIcon icon={faGithub} size='2x' className='phone:pt-1'/>
                            <a target="_blank" className='hover:scale-110 transition-transform phone:p-6' href='https://github.com/Steven7926/PillDispenserMobile'>Mobile App</a>
                            <a target="_blank" className='hover:scale-110 transition-transform phone:p-6' href='https://github.com/Steven7926/PillDispenserCaregiverPortal'>Web Caregiver Portal</a>
                            <a target="_blank" className='hover:scale-110 transition-transform phone:p-6' href='https://github.com/Steven7926/PillDispenserRaspberryPi'>Raspberry Pi</a>
                            <a target="_blank" className='hover:scale-110 transition-transform phone:p-6' href='https://github.com/Steven7926/PillDispenserMCU'>MCU</a>
                        </div>
                        <div className='flex phone:flex-row flex-col items-center justify-center'>
                            <iframe className='m-4 w-full h-full' src="https://www.youtube.com/embed/-0bP6SvqajM?si=CGmzGb-29-peGVUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe className='m-4 w-full h-full' src="https://www.youtube.com/embed/3JALGwyClF8?si=uoMmKFnEVjcVmd4-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe className='m-4 w-full h-full' src="https://www.youtube.com/embed/-pVUCsU-33M?si=a2QZ-LaJPiT48q1T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='flex phone:flex-row flex-col items-center justify-center mb-5'>
                            <img src={magicmedsapp} className = 'phone:w-1/12 h-full w-6/12 rounded-xl mt-4' alt="MagicMeds App" />
                            <ul className='phone:p-12 p-6 list-disc text-left inline-block phone:w-1/2'>
                                <li>MERN stack based mobile app for scheduiling pills and sending notifications to both users and caregivers.</li>
                                <li>Webb Portal for Caregivers to sign in and check on medication schedule.</li>
                                <li>Python script running on Raspberry Pi for running GUI and contacting database for scheduling medication drops.</li>
                                <li>Custom designed motor controller PCB with Atmega328 receiving data via SPI from the Raspberry Pi.</li>
                            </ul>
                        </div>
                    </Fade>
                </div>
                <div className = 'flex flex-col justify-center items-center rounded-md'>
                    <Fade duration={1000} direction="up" triggerOnce = {true} cascade fraction={0} damping={0.5}>
                        <a target="_blank" className='hover:scale-110 transition-transform flex flex-row justify-center items-center mt-5' href="https://github.com/Steven7926/OnlySocks" >
                            <span className='font-bold '>OnlySocks</span>
                            <img className='h-2/12 w-2/12' src={sock} alt="OnlySocks Logo" />
                        </a>
                        <div className='flex flex-row justify-center items-center'>
                            <span className = 'phone:ml-0 ml-4'>An fun social media clone mobile and web app where users can only post about socks.</span>
                        </div>
                        <div className = 'flex phone:flex-row flex-col pt-1'>
                            <a target="_blank" className='hover:scale-110 transition-transform phone:p-0' href='https://github.com/Steven7926/OnlySocks'>
                                <FontAwesomeIcon icon={faGithub} size='2x' className='phone:pt-5 pr-2'/>
                                Mobile and Web App
                            </a>
                        </div>
                        <div className='flex phone:flex-row flex-col items-center justify-center mb-5'>
                            <img src={onlysocks} className = 'phone:w-2/12 h-full w-6/12 rounded-xl mt-4' alt="OnlySocks App" />
                            <ul className='phone:p-12 p-6 list-disc text-left inline-block phone:w-1/2'>
                                <li>MERN stack based web and mobile app for posting statuses, liking and commenting, and making friend connections.</li>
                                <li>Hosted on an AWS EC2 instance with S3 used for storing images in posts and profile photos.</li>
                                <li>Login and signup implemented with a forgot password feature.</li>
                                <li>Web and mobile app created to mimic similar features.</li>
                                <li>Domain registered with Route 53 for DNS service and traffic routed with a Cloudfront Distribution as a CDN.</li>
                            </ul>
                        </div>
                    </Fade>
                </div>
                <div className = 'flex flex-col justify-center items-center rounded-md bg-blackClear'>
                    <Fade duration={1000} direction="up" triggerOnce = {true} cascade fraction={0} damping={0.5}>
                        <a target="_blank" className='hover:scale-110 transition-transform flex flex-row justify-center items-center mt-5' href="https://github.com/Steven7926/EventManager" >
                            <span className='font-bold '>Contact Manager & Event Manager</span>
                            <FontAwesomeIcon icon={faCalendar} size='2x' className='ml-2'/>
                        </a>
                        <div className='flex flex-row justify-center items-center'>
                            <span className = 'phone:ml-0 ml-0'>Simple Event Managing and Contact Managing Web Apps </span>
                        </div>
                        <div className = 'flex phone:flex-row flex-col pt-3'>
                            <FontAwesomeIcon icon={faGithub} size='2x' className='phone:pt-1'/>
                            <a target="_blank" className='hover:scale-110 transition-transform phone:pl-0 phone:pt-5 pr-2' href='https://github.com/Steven7926/ContactManager'>
                                <span className='ml-2'>Contact Manager</span>
                            </a>
                            <a target="_blank" className='hover:scale-110 transition-transform phone:pl-0 phone:pt-5 pr-2' href='https://github.com/Steven7926/EventManager'>
                                <span className='ml-2'>Event Manager</span>
                            </a>
                        </div>
                        <div className='flex phone:flex-row flex-col items-center justify-center mb-5'>
                            <img src={eventmanager} className='phone:w-5/12 h-full rounded-xl mt-4' alt="Events App" />
                            <ul className='phone:p-12 p-6 list-disc text-left inline-block phone:w-1/2'>
                                <li>LAMP stack based web app for managing events.</li>
                                <li>Different user types implemented for event hosts, admin, and event attendees.</li>
                                <li>Add and delete events for approval by an admin user.</li>
                                <li>Different views served to the user depending on the users type.</li>
                                <li>Sign up feature implemented.</li>
                            </ul>
                        </div>
                        <div className='flex phone:flex-row flex-col items-center justify-center mb-5'>
                            <img src={contactmanager} className='phone:w-5/12 h-full rounded-xl mt-4' alt="Contacts App" />
                            <ul className='phone:p-12 p-6 list-disc text-left inline-block phone:w-1/2'>
                                <li>LAMP stack based web app for managing contacts.</li>
                                <li>jQuery Datatables for easy data manipulation.</li>
                                <li>Add, edit and delete and search for contacts.Add, edit and delete and search for contacts.</li>
                                <li>Hosted on GoDaddy.</li>
                            </ul>
                        </div>
                    </Fade>
                </div>
                <div className = 'flex flex-col justify-center items-center rounded-md'>
                    <Fade duration={1000} direction="up" triggerOnce = {true} cascade fraction={0} damping={0.5}>
                        <a target="_blank" className='hover:scale-110 transition-transform flex flex-row justify-center items-center mt-5' href="https://github.com/Steven7926/TemplateTool" >
                            <span className='font-bold '>PDF Template Tool</span>
                            <FontAwesomeIcon icon={faFilePdf} size='2x' className='ml-2'/>
                        </a>
                        <div className='flex flex-row justify-center items-center'>
                            <span className = 'phone:ml-0 ml-4'>A Tool for downloading generated pdf templates linked to a database for reupload.</span>
                        </div>
                        <div className = 'flex phone:flex-row flex-col pt-3'>
                            <FontAwesomeIcon icon={faGithub} size='2x' className='phone:pt-1'/>
                            <a target="_blank" className='hover:scale-110 transition-transform phone:pl-0 phone:pt-5 pr-2' href='https://github.com/Steven7926/TemplateTool'>
                                <span className='ml-2'>Tool</span>
                            </a>
                        </div>
                        <div className='flex phone:flex-row flex-col items-center justify-center mb-5'>
                            {/* <img src={templateapp} className='phone:w-5/12 h-full rounded-xl mt-4' alt="Template App" /> */}
                            <ul className='phone:p-12 p-6 list-disc text-left inline-block phone:w-1/2'>
                                <li>Python based application that uses Tkinter for GUI</li>
                                <li>Allows for uploading an excel file (I used the format given in the provided xlsx) of students and display them in a table while also downloading a zip of generated pdf files</li>
                                <li>Allows for searching for students in the table and downloading individual generated pdfs and drawing files.</li>
                                <li>Allows for uploading pdfs of finished drawings and crop them out and download them to an images folder. Allows for uploading pdfs of finished drawings and crop them out and download them to an images folder. </li>
                                <li>Future work intended to make UI web app with backend Python API framework.</li>
                            </ul>
                        </div>
                    </Fade>
                </div>
                <div className = 'flex flex-col justify-center items-center rounded-md bg-blackClear'>
                    <Fade duration={1000} direction="up" triggerOnce = {true} cascade fraction={0} damping={0.5}>
                        <a target="_blank" className='hover:scale-110 transition-transform flex flex-row justify-center items-center mt-5' href="https://stevenlaurensteakations.com/" >
                            <span className='font-bold '>Steakations Website Blog</span>
                            <FontAwesomeIcon icon={faCalendar} size='2x' className='ml-2'/>
                        </a>
                        <div className='flex flex-row justify-center items-center'>
                            <span className = 'phone:ml-0 ml-4'>A fun Dockerized Wordpress blog outlining me and my fiancés travels</span>
                        </div>
                        <div className = 'flex phone:flex-row flex-col pt-1'>
                            <a target="_blank" className='hover:scale-110 transition-transform phone:pl-0 phone:pt-5 pr-2' href='https://github.com/Steven7926/Steakations'>
                                <FontAwesomeIcon icon={faGithub} size='2x' className='phone:pt-1'/>
                                <span className='ml-2'>Blog</span>
                            </a>
                        </div>
                        <div className='flex phone:flex-row flex-col items-center justify-center mb-5'>
                            <img src={steakations} className='phone:w-5/12 h-full rounded-xl mt-4' alt="Steakhouse Blog" />
                            <ul className='phone:p-12 p-6 list-disc text-left inline-block phone:w-1/2'>
                                <li>A fun way to learn wordpress and more about hosting.</li>
                                <li>The site is dockerized and deployed to a private S3 bucket for static website hosting.</li>
                                <li>Domain registered with Route 53 for DNS service and traffic routed with a Cloudfront Distribution as a CDN.</li>
                            </ul>
                        </div>
                    </Fade>
                </div>
            </Fade>
            
        </div>
    );
}
export default Projects;