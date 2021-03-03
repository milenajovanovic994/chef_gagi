import styled from 'styled-components'

const StyledWrapper = styled.div`
    margin: 0;
    padding: 0;
    font-size: 45%;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    color: #444;
    line-height: 1.9;
    background-color: #f3f3f3;
    .btn {
        display: inline-block;
        background-color: #5ec576;
        font-size: 1.6rem;
        font-family: inherit;
        font-weight: 500;
        border: none;
        padding: 1.25rem 4.5rem;
        border-radius: 10rem;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            background-color: #4bbb7d;
        }
    }
    p {
        color: #666;
    }
    img {
        transition: filter 0.5s;
    }
    .hidden {
        visibility: hidden;
        opacity: 0;
    }
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        z-index: 100;
        transition: all 0.5s;
    }
    .highlight {
        position: relative;
        content: '';
        opacity: 0.7;
        transform: scale(1.07, 1.05) skewX(-15deg);
        background-image: linear-gradient(to top left, #39b385, #9be15d);
    }
`

export default StyledWrapper