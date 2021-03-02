import styled from 'styled-components'

const StyledMain = styled.main`
    padding: 15rem 3rem;
    border-top: 1px solid #ddd;

    transition: transform 1s, opacity 1s;
    .section-title {
        max-width: 80rem;
        margin: 0 auto 8rem auto;
    }
    .section-description {
        font-size: 1.8rem;
        font-weight: 600;
        text-transform: uppercase;
        color: #5ec576;
        margin-bottom: 1rem;
    }
    .features {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin: 0 12rem;
    }
    .lazy-img {
        filter: blur(20px);
    }
    .features-img {
        width: 100%;
    }
    .features-feature {
        align-self: center;
        justify-self: center;
        width: 70%;
        font-size: 1.5rem;
    }
    .features-header {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`

export default StyledMain