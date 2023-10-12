import './desktop-navbar-styles.css'
import './mobile-navbar-styles.css'
import React, { useState, useEffect, useRef } from 'react'
import alxLogo from '../assets/svg/Alx.png'
import mobileAlxLogo from '../assets/svg/mobile-Alx-logo.png'
import homeSVG from '../assets/svg/home-1-svgrepo-com.svg'
import personSVG from '../assets/svg/person-male-svgrepo-com.svg'
import resumeSVG from '../assets/svg/plan-svgrepo-com.svg'
import webpageSVG from '../assets/svg/webpage-svgrepo-com.svg'

const Navbar = () => {

    const [handleResponsiveMenu, setHandleResponsiveMenu] = useState(false);
    const menuRef = useRef(null)
    const inputRef = useRef(null);

    const toggleResponsiveBarMenu = () => {
        setHandleResponsiveMenu((prevValue) => !prevValue);
        
    };
    
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          // El clic ocurrió fuera del menú, así que cerramos el menú
            setHandleResponsiveMenu(false);
        }
    };
    
    useEffect(() => {
        // Agregar un event listener para detectar clics en el documento
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          // Eliminar el event listener cuando el componente se desmonte
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return(
        <nav className='navbar-container'>
            <img src={alxLogo} className='img-working' alt='workingDesk'/>
            <img src={mobileAlxLogo} className='mobile-img-working' alt='workingDesk'/>
            
            {/*Mobile Menu*/}
            <div className="switch"  onClick={()=> toggleResponsiveBarMenu()} ref={menuRef}>
                <input ref={inputRef} type="checkbox"/>
                <div>
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                    <span className="line-3"></span>
                </div>
            </div>

            {/*Mobile Menu*/}
            {handleResponsiveMenu ? 
            <div className='mobile-list-container active'>
                <ul className='mobile-ul-list-container'>
                    <li className='mobile-navbar-li'>
                        <a href='#about'>
                            <li className='mobile-icon-text-container'>
                                <img src={personSVG} className='mobile-element-list' />
                                <span className='mobile-text-li'><button className='mobile-navbutton'>About</button></span>
                            </li>
                        </a>
                    </li>
                    <li className='mobile-navbar-li'>
                        <a href='#projects'>
                            <div className='mobile-icon-text-container'>
                                <img src={webpageSVG} className='mobile-element-list' />
                                <span className='mobile-text-li'><button className='mobile-navbutton'>Projects</button></span>
                            </div>
                        </a>
                    </li>
                    <li className='mobile-navbar-li'>
                        <a href="https://drive.google.com/file/d/19azL-fEiFAGxwy6VMiZ48r5MIpOIztYx/view?usp=sharing" target="_blank">
                            <div className='mobile-icon-text-container'>
                                <img src={resumeSVG} className='mobile-element-list' />
                                <span className='mobile-text-li'><button className='mobile-navbutton'>CV ES</button></span>
                            </div>
                        </a>
                    </li>
                    <li className='mobile-navbar-li'>
                        <a href='https://drive.google.com/file/d/1mqstUsLGQDa9IbUyyzI0RkCvm5ZI_skO/view?usp=sharing' target='_blank'>
                            <div className='mobile-icon-text-container'>
                                <img src={resumeSVG} className='mobile-element-list' />
                                <span className='mobile-text-li'><button className='mobile-navbutton'>CV EN</button></span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>: null
            }

            {/*Desktop Menu*/}
            <div className='list-container'>
                <ul className='ul-list-container'>
                    <li className='navbar-li'>
                        <a href='#about'>
                            <div className='icon-text-container'>
                                <img src={personSVG} className='element-list' />
                                <span className='text-li'><button className='navbutton'>About</button></span>
                            </div>
                        </a>
                    </li>
                    <li className='navbar-li'>
                        <a href='#projects'>
                            <div className='icon-text-container'>
                                <img src={webpageSVG} className='element-list' />
                                <span className='text-li'><button className='navbutton'>Projects</button></span>
                            </div>
                        </a>
                    </li>
                    <li className='navbar-li'>
                        <a href="https://drive.google.com/file/d/19azL-fEiFAGxwy6VMiZ48r5MIpOIztYx/view?usp=sharing" target="_blank">
                            <div className='icon-text-container'>
                                <img src={resumeSVG} className='element-list' />
                                <span className='text-li'><button className='navbutton'>CV ES</button></span>
                            </div>
                        </a>
                    </li>
                    <li className='navbar-li'>
                        <a href='https://drive.google.com/file/d/1mqstUsLGQDa9IbUyyzI0RkCvm5ZI_skO/view?usp=sharing' target='_blank'>
                            <div className='icon-text-container'>
                                <img src={resumeSVG} className='element-list' />
                                <span className='text-li'><button className='navbutton'>CV EN</button></span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;