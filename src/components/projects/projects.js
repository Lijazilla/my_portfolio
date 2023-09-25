import React from "react";
import './projects.css'
import githublogo from '../assets/svg/github-142-svgrepo-com.svg'

const Projects = () => {
    return(
        <main className="project-container">

            <section className="section-container">
                <img src="https://i.imgur.com/R2r7LTY.png" className="project-img" alt="project-img"/>
                <div class="card-project">
                    <div>
                        <h1>Box Braids México</h1>
                        <p>A page that i did for a business friend, i used all the tech in my knowledge to create this landing page.</p>
                        
                        <section className="links">
                            <img src={githublogo} className="projects-github-logo"/>
                            <button class="cta">
                                <span>Go to Page</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </section>

                    </div>
                </div>
            </section>

            <section className="section-container">
                <img src="https://i.imgur.com/h8vSGnU.png" className="project-img" alt="project-img"/>
                <div class="card-project">
                    <div>
                        <h1>Wheather App</h1>
                        <p>This App gives you the wheather of the city you type.</p>
                        
                        <section className="links">
                            <img src={githublogo} className="projects-github-logo"/>
                            <button class="cta">
                                <span>Go to Page</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </section>

                    </div>
                </div>
            </section>

            
        </main>
    )
};

export default Projects;