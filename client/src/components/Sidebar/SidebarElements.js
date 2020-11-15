import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: var(--dark);
    display: grid;
    align-items: center;
    font-size: 1.75rem;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
` 

export const CloseIcon = styled(FaTimes)`
    color: var(--medium);
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    backgrund: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: var(--white);
`


export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`
export const SidebarLink = styled(LinkS)`
    desiplay: flex;
    align-items: center;
    justify-content: center:
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: var(--white);
    cursor: pointer;

    &:hover {
        color: var(--medium);
        transition: 0.2s ease-in-out;
    }
`


export const SideBtnWrap = styled.div`
    display:flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: var(--light);
    whitespace: nowrap;
    padding: 16px 60px;
    color: var(--white);
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: var(--dark);
        color: white;
    }
`