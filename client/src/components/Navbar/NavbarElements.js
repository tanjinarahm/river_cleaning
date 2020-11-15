import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
    background: var(--white);
    height: 80px;
    // height: 80px;
    margin-top: -80px;
    // position: fixed;
    // width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 2rem;
    box-sizing: border-box;
    max-width: 1400px;
`

export const NavLogo = styled(LinkR)`
    width: 100px;
    color: red;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: var(--dark);
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    // margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    // padding: 0 2rem;
    padding-left: 2rem;
    // margin-left: 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: var(--medium);
        // border-bottom: 3px solid var(--medium);
    }

    &.active {
        color: red;
        // border-bottom: 3px solid #01bf71;
    }

    @media screen and (min-width: 1200px){
        padding-left: 5rem;
    }
`