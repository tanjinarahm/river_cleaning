import styled from 'styled-components';
import img from '../../img/couch.jpg';

export const AboutContainer = styled.div`
    background: var(--medium);
    color: var(--white);
    // display: flex;
    // justify-content: center;
    align-items: center;
    padding: 4rem 0;

    @media screen and (min-width: 768px){
        background-image: url(${img});
        background-size: cover;
        background-repeat: no-repeat;
        height: 600px;
        width: 70%;
        position: relative;
    }
`

export const AboutWrapper = styled.div`
    max-width:1400px;
    margin: 0 auto;
    padding: 0 2rem;
    background: var(--medium);

    @media screen and (min-width: 768px){
        width: 425px;
        padding: 4rem 2rem;
        position: absolute;
        right: -30%;
        bottom: -10%;
    
`

export const CallUs = styled.div`
    background: var(--dark);
    color: var(--white);
    padding: 4rem 2rem;
    text-align: center;
`

export const AboutH1 = styled.h1`
    font-size: 2rem;
    margin-bottom: 2.5rem;
    letter-spacing: 2px;

    @media screen and (min-width: 768px){
        
    }
`

export const AboutP1 = styled.p`
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-spacing: 22px;

    @media screen and (min-width: 768px){
        
    }
`

export const AboutP2 = styled.p`
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-spacing: 22px;    

    @media screen and (min-width: 768px){
        
    }
`

export const AboutP3 = styled.p`
    font-size: 1rem;
    line-spacing: 22px;

    @media screen and (min-width: 768px){
        
    }
`

export const PCall = styled.p`
    font-size: 1.25rem;
    font-weight: 300;

    @media screen and (min-width: 768px){
        font-size: 1.5rem;
    }
`