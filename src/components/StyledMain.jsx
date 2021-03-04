import styled from 'styled-components'

const StyledMain = styled.main`
    padding-top: 15rem;
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
    .section-contact {
        background-color: #37383d;
        border-top: none;
        border-bottom: 1px solid #444;
        text-align: center;
        padding: 5rem 3rem;
    }
    .section-contact .section-header {
        color: #fff;
        text-align: center;
    }
    .section-contact .section-title {
        margin-bottom: 6rem;
    }
    .section-contact .btn {
        font-size: 1.4rem;
        padding: 2rem 5rem;
    }
    .section-header {
        font-size: 2rem;
        line-height: 1.3;
        font-weight: 500;
    }
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 60rem;
        background-color: #f3f3f3;
        padding: 5rem 6rem;
        box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);
        z-index: 1000;
        transition: all 0.5s;
    }
    .modal-header {
        font-size: 3.25rem;
        margin-bottom: 4.5rem;
        line-height: 1.5;
    }
    .modal-form {
        margin: 0 3rem;
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: 2.5rem;
    }
    .modal-form input,
    .modal-form textarea {
        font-size: 1.7rem;
        padding: 1rem 1.5rem;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
    }
    .btn--close-modal {
        font-family: inherit;
        color: inherit;
        position: absolute;
        top: 0.5rem;
        right: 2rem;
        font-size: 4rem;
        cursor: pointer;
        border: none;
        background: none;
    }
`

export default StyledMain