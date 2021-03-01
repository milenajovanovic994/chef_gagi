import styled from 'styled-components'

const StyledLogin = styled.div`

    border-radius: 50px;
    background: #9c9b81;
    box-shadow: inset 17px 17px 35px #5e5d4d,
                inset -17px -17px 35px #dad9b5;


    display: flex;
    flex-direction: column;
    text-align: center;
    justify-items: center;
    font-size: 22px;
    max-width: 500px;
    min-height: 672px;
    margin: 0 auto;
    /* border-radius: 25px; */
    color: white;
    /* background-color: rgba(0, 0, 0, 0.5); */

    .identity-input {
        margin-top: 200px;
    }
    input {
        margin: 0 auto;
        background-color: black;
        opacity: 50%;
        color: white;
        margin-top: 10px;
        width: 300px;
        height: 59px;
        font-size: 22px;
        margin-bottom: 14px;
        max-width: 527px;
        padding: 0 10%;
    }
    .pass-wrapper {
        position: relative;
        display: flex;
        margin-bottom: 14px;
    }
    i {
        position: absolute;
        top: 38%;
        right: 16%;
    }
    i:hover {
        color: #00fcb6;
        cursor: pointer;
    }
    .btn-submit {
        width: 300px;
        height: 50px;
        margin: 0 auto;
        cursor: pointer;
    }
`
export default StyledLogin