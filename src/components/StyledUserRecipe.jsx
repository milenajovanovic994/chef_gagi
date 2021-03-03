import styled from 'styled-components'

const StyledUserRecipe = styled.div`
    display: inline-block;
    width: 400px;
    padding: 10px;
    margin: 20px;
    border: 7px inset #5ec576;
        &:hover {
            border: 7px outset #4bbb7d;
        }
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    img {
        width: 250px;
        height: 150px;
        border-radius: 0.5rem;
        margin-top: 1rem;
    }
    h4 {
        font-size: 3rem;
        margin-bottom: 0;
        margin-top: 1rem;
    }
    .author {
        text-align: center;
        font-size: 2rem;
        margin: 0 auto;
    }
    .details {
        font-size: 2rem;
        ul {
            text-align: left;
        }
    }
`

export default StyledUserRecipe