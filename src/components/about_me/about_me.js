import React from "react";
import './about_me.css'
import './mobile-about-me.css'
import developerWorking from '../assets/svg/undraw_feeling_proud_qne1 (1).svg'
import frontEndImg from '../assets/svg/webpage-svgrepo-com.svg'
import linkedInLogo from '../assets/svg/linkedin-svgrepo-com.svg'
import javascriptlogo from '../assets/svg/javascript-svgrepo-com.svg'
import htmllogo from '../assets/svg/html-svgrepo-com.svg'
import csslogo from '../assets/svg/css-3-svgrepo-com.svg'
import reactlogo from '../assets/svg/react-logo-svgrepo-com.svg'
import npmlogo  from '../assets/svg/npm-svgrepo-com.svg'
import mobileBashLogo from '../assets/svg/mobile-linux-svgrepo.svg'
import mobileFrontend from '../assets/svg/mobile-svg-frontend.svg'


const About_me = () => {
    return(
        <main className="main-container">
            
                <section className="image-background">

                    <div className="presentation">
                        <h1 className="desktop-text-presentation">Hey! My name is Alejandro Jiménez<br/>
                            And I'm from Querétaro, México.
                        </h1>
                        
                        <div className="developer-section">
                            <h1 className="mobile-text-presentation">I'm Alex Jiménez, i do Frontend stuff </h1>{/*for mobile version*/}
                            <h2 className="tracking-in-expand desktop-text-presentation">I work as a Frontend Developer</h2>
                            <img src={frontEndImg} alt="frontend" className="frontend"/>
                        </div>

                        <div className="container-for-mobile-developer-img-working">
                            <img src={developerWorking} className="mobile-developer-img-working" alt="office-desk"/>
                            <img src={mobileFrontend} className="mobile-frontend-img" alt="office-frontend"/>
                        </div>
                            
                        
                        <div className="svgIcons-div">
                            
                            <button className="Btn">
                                <span className="svgContainer">
                                <svg fill="white" viewBox="0 0 496 512" height="1.6em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                </span>
                                <span className="BG"></span>
                            </button>

                            <img src={linkedInLogo} alt="linkedin" className="linkedin"/>
                            
                            <div><a href="+525539727009">
                                <button className="whatsapp-button">
                                <p>Text me</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                </svg>
                            </button>
                                </a></div>

                            <button className="email-button">
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                    </svg>
                                    </div>
                                </div>
                                <span>Email me</span>
                            </button>
                        </div>

                        <section className="my-stack">
                            <p>This is my stack</p>
                            <img src={htmllogo} alt="html" className="mobile-html-logo"/>
                            <img src={csslogo} alt="css" className="mobile-css-logo" />
                            <img src={javascriptlogo} alt="JavaScript" className="mobile-javascript-logo"/>
                            <img src={reactlogo} alt="React" className="mobile-react-logo"/>
                            <img src={npmlogo} alt="npm" className="mobile-npm-logo"/>
                            <img src={mobileBashLogo} alt="Linux-Bash" className="mobile-bash-logo"/>
                            
                        </section>
                    </div>
                    
                    <img src={developerWorking} className="developer-img-working" alt="office-desk"/>

                </section>

                <section className="container-aboutme">
                    <img className="coding-image" src="https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="coding-frontend"/>

                    <div className="card">
                        <div className="card-details">
                            <h1>About me:</h1>
                            <h2>I'm a Frontend developer who likes building things</h2>
                            <p>My stack includes HTML, CSS, JavaScript and React.</p>
                            <p>But that's not all, i do have experience collaborating with teams,
                            managing teams and client service for more than 10 years in another administrative areas.
                            </p>
                        </div>
                        <button className="card-button">Contact Me</button>
                    </div>

                </section>

                
            
        </main>
    )
}

export default About_me;