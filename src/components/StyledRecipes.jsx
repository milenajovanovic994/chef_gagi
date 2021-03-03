import styled from 'styled-components'

const StyledRecipies = styled.main`
    padding-top: 3rem;
    border-top: 1px solid #ddd;

    transition: transform 1s, opacity 1s;
    .main-title {
        margin-top: 0.2rem;
        flex: 1;
        max-width: 115rem;
        grid-template-columns: 3fr 2fr;
        row-gap: 3rem;
        align-content: center;
        justify-content: center;
        align-items: start;
        justify-items: start;
        text-align: center;
        h1 {
        font-size: 4rem;
        line-height: 1.35;
        }
    }
    .div-select {
        padding: 1rem 1.5rem;
        text-align: center;
        width: 300px;
        height: 59px;
        select {
            padding: 10px;
            border-radius: 0.5rem;
            font-size: 1rem;
        }
    }
`
export default StyledRecipies