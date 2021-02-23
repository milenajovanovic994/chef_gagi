import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getAllUsers } from "../service"

const Login = ({ setUser }) => {
    const [identity, setIdentity] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault()

                getAllUsers().then(res => {
                    let maybeUser = res.data.find(user => (user.username === identity || user.email === identity) && user.password === password)

                    if (maybeUser) {
                        setUser(maybeUser)
                        history.push('/recipes')
                    }
                    else {
                        console.log('Wrong username or password')
                    }
                })
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
        </>
    )
}
export default Login