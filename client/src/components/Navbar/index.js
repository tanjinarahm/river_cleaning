import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../../img/river-logo.svg'
import logobold from '../../img/river-logo-bold.svg'
import css from './Navbar.css'
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'

const Navbar = ({ toggle }) => {
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);
    return (
        <>
           <Nav>
               <NavBarContainer>
                    <NavLogo to="/"><img id="logo" src={logo} alt=""/></NavLogo>
                    <IconContext.Provider value={{ color: '#1174CD' }}>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                    </IconContext.Provider>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
               </NavBarContainer>
           </Nav>
        </>
    )
}

export default Navbar