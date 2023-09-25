import './navbar.css'
import React from 'react'
import workingDesk from '../assets/svg/undraw_programming_re_kg9v.svg'
import homeSVG from '../assets/svg/home-1-svgrepo-com.svg'
import personSVG from '../assets/svg/person-male-svgrepo-com.svg'
import resumeSVG from '../assets/svg/plan-svgrepo-com.svg'
import webpageSVG from '../assets/svg/webpage-svgrepo-com.svg'


const Navbar = () => {
    
    return(
        <nav className='navbar-container'>
            <img src={workingDesk} className='img-working' alt='workingDesk'/>
            <div className='list-container'>
                <ul className='ul-list-container'>
                    <li className='navbar-li'>
                        <a>
                            <div className='icon-text-container'>
                                <img src={homeSVG} className='element-list' />
                                <p className='text-li'>Home</p>
                            </div>
                        </a>
                    </li>
                    <li className='navbar-li'>
                        <a>
                            <div className='icon-text-container'>
                                <img src={personSVG} className='element-list' />
                                <p className='text-li'>About</p>
                            </div>
                        </a>
                    </li>
                    <li className='navbar-li'>
                        <a>
                            <div className='icon-text-container'>
                                <img src={webpageSVG} className='element-list' />
                                <p className='text-li'>Projects</p>
                            </div>
                        </a>
                    </li>
                    <li className='navbar-li'>
                        <a>
                            <div className='icon-text-container'>
                                <img src={resumeSVG} className='element-list' />
                                <p className='text-li'>Resume</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;