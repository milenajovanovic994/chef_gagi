import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { loginUser } from "../service"
import Error from "./Error"

const Login = ({ setUser,user }) => {
    const [identity, setIdentity] = useState('')
    const [password, setPassword] = useState('')
    const [errorL, setErrorL] = useState('')
    const history = useHistory()

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault()

                let maybeUser = {
                    username: identity,
                    password: password
                }

                loginUser(maybeUser).then(res => {
                    console.log(res)
                    if (res.data === "Success") {
                        setUser(maybeUser)
                        history.push('/recipes')
                    }
                    else if (res.data === "Not Allowed") {
                        setErrorL('Wrong password!')
                    }
                }).catch(() => {
                    setErrorL('User with this username does not exist.')
                } )
            }}>
                <div>
                    <label htmlFor="identity">Username or Email: </label>
                    <input type="text" id="identity" placeholder="Username/email..." onChange={(e) => setIdentity(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
            <div>
                <p>You don't have an account yet? Register now!</p>
                <Link to="/register">Registration</Link>
            </div>
            <Error error={errorL} />
        </>
    )
}
export default Login