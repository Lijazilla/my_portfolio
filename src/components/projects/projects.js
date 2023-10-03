import React from "react";
import './projects.css'
import './mobile-projects.css'
import githublogo from '../assets/svg/github-142-svgrepo-com.svg'

const Projects = () => {
    return(
        <main className="project-container">

            <section className="section-container">
                <div className="image-container">
                    <img src="https://i.imgur.com/iKeOPjC.png" className="box-braids-project-img" alt="project-img"/>
                </div>
                
                <div className="card-project">
                    <div className="info-project">
                        <h1>Box Braids México</h1>
                        <p>A page that i did for a business friend, i used all the tech in my knowledge to create this landing page.</p>
                        
                        <section className="links">
                            <img src={githublogo} className="projects-github-logo"/>
                            <button className="cta-box-braids">
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
                <div className="image-container">
                    <img src="https://i.imgur.com/OZnQZig.png" className="project-img" alt="project-img"/>
                </div>
                
                <div className="card-project">
                    <div className="info-project">
                        <h1>Document Report</h1>
                        <p>This App lets you create a Report Document with images, you can add date, title, text body, images and more.</p>
                        
                        <section className="links">
                            <img src={githublogo} className="projects-github-logo"/>
                            <button className="cta">
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
                <div className="image-container">
                    <img src="https://i.imgur.com/OZnQZig.png" className="project-img" alt="project-img"/>
                </div>
                
                <div className="card-project">
                    <div className="info-project">
                        <h1>Wheather App</h1>
                        <p>This App gives you the wheather from the city you type.</p>
                        
                        <section className="links">
                            <img src={githublogo} className="projects-github-logo"/>
                            <button className="cta">
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