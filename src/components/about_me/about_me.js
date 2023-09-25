import React from "react";
import './about_me.css'
import developerWorking from '../assets/svg/undraw_feeling_proud_qne1 (1).svg'
import frontEndImg from '../assets/svg/webpage-svgrepo-com.svg'
import githubLogo from '../assets/svg//github-svgrepo-com.svg'
import linkedInLogo from '../assets/svg/linkedin-svgrepo-com.svg'
import javascriptlogo from '../assets/svg/javascript-svgrepo-com.svg'
import htmllogo from '../assets/svg/html-svgrepo-com.svg'
import csslogo from '../assets/svg/css-3-svgrepo-com.svg'
import reactlogo from '../assets/svg/react-logo-svgrepo-com.svg'
import npmlogo  from '../assets/svg/npm-svgrepo-com.svg'
import bashlogo from '../assets/svg/bash-svgrepo-com.svg'


const About_me = () => {
    return(
        <main className="main-container">
            
                <section className="image-background">

                    <div className="presentation">
                        <h1>Hey! My name is Alejandro Jiménez<br/>
                            And I'm from Querétaro, México.
                        </h1>
                        <div className="developer-section">
                            <h2 className="tracking-in-expand">I'm a Frontend Developer</h2>
                            <img src={frontEndImg} alt="fronend"/>
                        </div>
                        
                        <div className="svgIcons-div">
                            <img src={githubLogo} alt="github"/>
                            <img src={linkedInLogo} alt="linkeind"/>
                            
                        </div>

                        <section className="my-stack">
                            <p>This is my stack</p>
                            <img src={htmllogo} alt="html" />
                            <img src={csslogo} alt="css" />
                            <img src={javascriptlogo} alt="JavaScript" />
                            <img src={reactlogo} alt="React" />
                            <img src={npmlogo} alt="npm" />
                            <img src={bashlogo} alt="Linux-Bash" />
                            
                        </section>
                    </div>
                    
                    <img src={developerWorking} className="developer-img-working" alt="office-desk"/>

                </section>

                <section className="container-aboutme">
                    <img className="coding-image" src="https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="coding-frontend"/>

                    <div class="card">
                        <div class="card-details">
                            <h1>About me:</h1>
                            <h2>I'm a Frontend developer who likes building things</h2>
                            <p>My stack includes HTML, CSS, JavaScript and React.</p>
                            <p>But that's not all, i do have experience collaborating with teams,
                            managing teams and client service for more than 10 years.
                            </p>
                        </div>
                        <button class="card-button">Contact Me</button>
                    </div>

                </section>

                
            
        </main>
    )
}

export default About_me;