import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HeroContainer = styled.div`
    background: var(--white);
    display: flex;
    // justify-content: center;
    align-items: center;
    text-align: left;
    // height: 800px;
    height: 100vh;
    position: relative;
    z-index: 1;
    // max-width:1500px;


    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.5) 100%, rgba(0,0,0,0.4) 100%), linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%);
        z-index: 2;
    }
    
    @media screen and (min-width: 1200px){
        :before{
            background: none;
        }
    }

`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media screen and (min-width: 1200px){
        // position: relative;
        width: 45%;
        left: 55%;
        right: 0;
    }
`


export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: var(--white);


    @media screen and (min-width: 1200px){

    }
`





export const HeroContent = styled.div`
    z-index: 3;
    width: 100%;
    padding: 0 2rem;
    max-width: 1400px;
    margin: 0 auto;
    // position: absolute;
    // padding: 8px 24px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
`

export const HeroH1 = styled.h1`
    color: var(--white);
    font-size: 48px;
    // text-align: left;
    font-weight: 600;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    @media screen and (min-width: 1200px){
        color:var(--dark);
        font-weight: 600;
    }
`

export const HeroP = styled.p`
    margin-top: 18px;
    color: var(--white);
    font-size: 22px;
    // text-align: left;
    max-width: 500px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px){
        color:var(--dark);

    }

`

export const HeroBtnWrapper = styled.div`
    margin-top: 28px;
    display: inline-block;
    // display:flex;
    // flex-direction: column;
    // align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    // margin-top: 10px;
    margin-left: 8px;
    // font-size: 20px;
    margin-bottom: -2px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    margin-bottom: -2px;
    // font-size: 20px;
`