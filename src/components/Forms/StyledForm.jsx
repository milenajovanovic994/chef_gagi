import styled from 'styled-components'

const StyledLogin = styled.div`

    border-radius: 50px;
    background: #4a995c;
    box-shadow: inset 17px 17px 35px #5e5d4d,
                inset -17px -17px 35px #4bbb7d;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-items: center;
    font-size: 22px;
    max-width: 500px;
    margin: -170px auto 10px auto;
    color: white;
    .identity-input {
        margin-top: 30px;
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
        &:hover {
        color: #00fcb6;
        cursor: pointer;
        }
    }
    .btn-submit {
        width: 300px;
        height: 50px;
        margin: 0 auto;
        cursor: pointer;
        &:hover {
            background-color: #3d3d3d;
        }
    }
    .register-now {
        margin: 10px 0px 20px 0px;
    }
    p {
        color: white;
    }
`
export default StyledLogin