import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLinkRight = styled(Link)`
    /* padding: 10px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    } */
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: 4rem;
    &:link,
    &:visited {
        font-size: 1.2rem;
        font-weight: 400;
        text-decoration: none;
        display: block;
        transition: all 0.3s;
        padding: 0.8rem 2.5rem;
        border-radius: 3rem;
        background-color: #5ec576;
        color: #222;
    }
    &:hover,
    &:active {
        color: inherit;
        background-color: #4bbb7d;
        color: #333;
    }

`

export default StyledLinkRight