import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
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
        color: inherit;
        text-decoration: none;
        display: block;
        transition: all 0.3s;
    }

`

export default StyledLink