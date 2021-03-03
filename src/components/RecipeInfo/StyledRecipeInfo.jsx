import styled from 'styled-components'

const StyledRecipeInfo = styled.div`
    text-align: center;
    margin: auto;
    padding: 10px;
    img {
        width: 500px;
        height: 300px;
        border-radius: 0.5rem;
        &:hover {
            transform: scale(1.1);
        }
    }
    h1 {
        font-size: 4rem;
        line-height: 1.35;
        &:hover {
            opacity: 0.7;
            color: #4bbb7d;
        }
    }
    .section-main {
        margin: 1rem auto;
        max-width: 60rem;
        padding: 2rem 6rem;
        h4 {
        font-size: 2rem;
       }
    }
    ul {
        text-align: left;
    }
    .ingredients {
        margin: 1rem;
        font-style: italic;
        font-size: 1.3rem;
        border: 4px outset #5ec576;
        border-radius: 10px;
        &:hover {
            transform: scale(1.1);
        }
    }
    .recipe {
        margin: 1rem;
        border: 4px inset #5ec576;
        border-radius: 10px;
        &:hover {
            transform: scale(1.1);
        }
    }
    .recipe-instruction {
        font-size: 1.65rem;
        justify-self: center;
    }
`

export default StyledRecipeInfo