import styled from 'styled-components'

const StyledHeader = styled.header`
    padding: 0 3rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header-title {
        margin-top: 4rem;
        flex: 1;
        max-width: 115rem;
        display: grid;
        grid-template-columns: 3fr 2fr;
        row-gap: 3rem;
        align-content: center;
        justify-content: center;
        align-items: start;
        justify-items: start;
    }
    h1 {
        font-size: 4.5rem;
        line-height: 1.35;
    }
    h4 {
        font-size: 2rem;
        font-weight: 500;
    }
    .header-img {
        /* width: 100%; */
        margin-top: 4rem;
        grid-column: 2 / 3;
        grid-row: 1 / span 4;
        width: 550px;
        /* transform: translateY(-1rem); */
    }
`

export default StyledHeader