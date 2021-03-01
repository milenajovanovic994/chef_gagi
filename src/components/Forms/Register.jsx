import { useState } from "react"
import { useHistory } from "react-router-dom"
import { postUser } from "../../service"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import StyledForm from "./StyledForm"
import Error from "../Error/Error"
const eye = <FontAwesomeIcon icon={faEye} />

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    const [errorR, setErrorR] = useState('')
    const [passShown, setPassShown] = useState(false)
    const [passShown1, setPassShown1] = useState(false)
    const history = useHistory()

    const togglePasswordVisiblity = () => {
        setPassShown(passShown ? false : true)
        setPassShown1(passShown1 ? false : true)
    }

    const isValid = () => {
        if (username.trim().length >= 4 &&
            email.trim().length > 0 &&
            pass.length >= 8 &&
            pass === pass2 &&
            !/^[a-zA-Z]+$/.test(pass) &&
            !/^\d+$/.test(pass)) {
            return true
        }
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={(e) => {
                e.preventDefault()

                if (isValid()) {
                    let user = {
                        username: username,
                        email: email,
                        password: pass
                    }
                    postUser(user).then(() => {
                        history.push('/login')
                    }).catch(() => {
                        setErrorR('User with this username or email already exists!')
                    })

                }
                else if (username.trim().length < 4) {
                    setErrorR('Username must include at least 4 characters!')
                }
                else if (email.trim().length === 0) {
                    setErrorR('Email must be entered!')
                }
                else if (/^[a-zA-Z]+$/.test(pass) ||
                    /^\d+$/.test(pass) || pass.trim().length < 8) {
                    setErrorR('Password must include 8 characters or more, at least one number and one letter!')
                }
                else if (pass !== pass2) {
                    setErrorR('Passwords must match!')
                }
            }}>
                <StyledForm>
 {/* <div> */}
                    {/* <label htmlFor="username">Username: </label> */}
                    <input type="text" id="username" placeholder="Username..." className="identity-input" onChange={(e) => setUsername(e.target.value)} />
                {/* </div> */}
                {/* <div> */}
                    {/* <label htmlFor="email">Email: </label> */}
                    <input type="email" id="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
                {/* </div> */}
                <div className="pass-wrapper">
                    {/* <label htmlFor="pass">Password: </label> */}
                    <input type={passShown ? "text" : "password"} id="pass" placeholder="Password..." onChange={(e) => setPass(e.target.value)} />
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
                <div className="pass-wrapper">
                    {/* <label htmlFor="pass2">Enter your password again: </label> */}
                    <input type={passShown1 ? "text" : "password"} id="pass2" placeholder="Password..." onChange={(e) => setPass2(e.target.value)} />
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
                {/* <div> */}
                    <input type="submit" value="Register" className="btn-submit" />
                {/* </div> */}
                <Error error={errorR} />
                </StyledForm>
               
            </form>
        </>
    )
}
export default Register