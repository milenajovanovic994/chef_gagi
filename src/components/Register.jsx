import { useState } from "react"
import { useHistory } from "react-router-dom"
import { postUser } from "../service"
import Error from "./Error"

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errorR, setErrorR] = useState('')
    const history = useHistory()

    const isValid = () => {
        if (username.trim().length >= 4 &&
            email.trim().length > 0 &&
            pass.length >= 8 &&
            !/^[a-zA-Z]+$/.test(pass) &&
            !/^\d+$/.test(pass)) {
            return true
        }
    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()

                if (isValid()) {
                    let user = {
                        username: username,
                        email: email,
                        password: pass
                    }
                    postUser(user)
                    history.push('/login')
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
            }}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" placeholder="Username..." onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input type="password" id="pass" placeholder="Password..." onChange={(e) => setPass(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
            <Error error={errorR} />
        </>
    )
}
export default Register