import React, { useState, useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../../img/river-logo.svg'
import logobold from '../../img/river-logo-bold.svg'
import css from './Navbar.css'
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);


    const toggleHome = () => {
        scroll.scrollToTop();
    }
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);
    return (
        <>
           <Nav scrollNav={scrollNav}>
               <NavBarContainer>
                    <NavLogo to="/" onClick={toggleHome}><img id="logo" src={logo} alt=""/></NavLogo>
                    <IconContext.Provider value={{ color: '#1174CD' }}>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                    </IconContext.Provider>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            activeClass="active"
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                             activeClass="active"
                             >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                             activeClass="active"
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                             activeClass="active"
                            >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
               </NavBarContainer>
           </Nav>
        </>
    )
}

export default Navbar