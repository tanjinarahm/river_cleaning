import styled from 'styled-components'
import {Link} from 'react-scroll'


export const ContactBtn = styled(Link)`
    border-radius: 5px;
    // background: ${({primary}) => (primary ? '#0E74CD' : '#010606')};
    background: var(--medium);
    white-space: nowrap;
    padding: ${({big}) => (big ?  '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#0E74CD')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px var(--medium) solid;
    cursor: pointer;
    display: inline-block;
    // justify-content: center;
    // align-items: center;
    transition: all 0.2s ease-in-out;
    margin-right: 10px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: var(--white);
        color: var(--dark);
        border: 1px var(--white) solid;
        // background: ${({primary}) => (primary ? '#0E74CD' : '#FFF')};
    }

    @media screen and (min-width: 1200px){
        &:hover{
            color: var(--medium);
            border: 1px var(--medium) solid;
        }
    }

`

export const HowBtn = styled(Link)`
    border-radius: 5px;
    // background: ${({primary}) => (primary ? '#0E74CD' : '#010606')};
    background: transparent;
    white-space: nowrap;
    padding: ${({big}) => (big ?  '14px 48px' : '12px 30px')};
    // color: ${({dark}) => (dark ? '#fff' : '#0E74CD')};
    color: var(--white);

    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px var(--white) solid;
    cursor: pointer;
    display: inline-block;
    // justify-content: center;
    // align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: var(--white);
        color: var(--dark);
        border: 1px var(--white) solid;
        // background: ${({primary}) => (primary ? '#0E74CD' : '#FFF')};
    }


    @media screen and (min-width: 1200px){
        color:var(--medium);
        border: 1px var(--medium) solid;

        &:hover{
            color: var(--white);
            border: 1px var(--medium) solid;
            background: var(--medium);
        }
    }
`