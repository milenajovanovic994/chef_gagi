import styled from 'styled-components'

const StyledRecipe = styled.div`
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
    }
    .btn-recipe {
        display: inline-block;
        background-color: #5ec576;
        font-size: 1.2rem;
        font-family: inherit;
        font-weight: 500;
        border: none;
        padding: 1rem 3rem;
        border-radius: 10rem;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            background-color: #4bbb7d;
        }
    }
    h4 {
        font-size: 2rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
`

export default StyledRecipe