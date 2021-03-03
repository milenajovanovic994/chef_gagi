import styled from 'styled-components'

const StyledFooter = styled.footer`
    padding: 1rem 3rem;
    background-color: #37383d;
    .footer-nav {
        list-style: none;
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }
    .footer-item {
        margin-right: 4rem;
    }
    .footer-svg {
        width: 1.6rem;
    }
    .footer-copyright {
        font-size: 1rem;
        color: #aaa;
        text-align: center;
    }
    .footer-link {
        font-size: 1.1rem;
        color: #eee;
        text-decoration: none;
    }
    .footer-copyright .footer-link {
        font-size: 1.1rem;
    }

`

export default StyledFooter