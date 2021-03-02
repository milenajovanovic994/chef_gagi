import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
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
    &:hover {
        background-color: #626e643a;
        border-radius: 3rem;
        padding: 0.8rem 2.5rem;
    }

`

export default StyledLink