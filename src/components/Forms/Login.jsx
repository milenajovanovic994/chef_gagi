import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { loginUser } from "../../service"
import Error from "../Error/Error"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import StyledForm from "./StyledForm"
const eye = <FontAwesomeIcon icon={faEye} />

const Login = ({ setUser }) => {
    const [identity, setIdentity] = useState('')
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false)
    const [errorL, setErrorL] = useState('')
    const history = useHistory()

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault()

                let maybeUser = {
                    username: identity,
                    password: password
                }
                if(identity === '' || password === ''){
                    setErrorL('Username and Password fields can not be empty!')
                    return
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
                })
            }}>
                <StyledForm>
                    {/* <div> */}
                    {/* <label htmlFor="identity">Username: </label> */}
                    <input type="text" id="identity" placeholder="Username..." className="identity-input" onChange={(e) => setIdentity(e.target.value)} />
                    {/* </div> */}
                    <div className="pass-wrapper">
                        {/* <label htmlFor="password">Password: </label> */}
                        <input type={passwordShown ? "text" : "password"} id="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                        <i onClick={togglePasswordVisiblity}>{eye}</i>
                    </div>
                    <input type="submit" value="Login" className="btn-submit" />
                    <Error error={errorL} />
                </StyledForm>
                {/* <div> */}

                {/* </div> */}
            </form>
            <div>
                <p>You don't have an account yet? Register now!</p>
                <Link to="/register">Registration</Link>
            </div>
            
        </>
    )
}
export default Login