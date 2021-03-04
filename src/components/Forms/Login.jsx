import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { loginUser } from "../../service"
import Error from "../Error/Error"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import StyledForm from "./StyledForm"
import StyledWrapper from "../StyledWrapper"
import StyledMain from "../StyledMain"
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
            <StyledWrapper>
                <StyledMain>
                    <StyledForm>
                        <form onSubmit={(e) => {
                            e.preventDefault()

                            let maybeUser = {
                                username: identity,
                                password: password
                            }
                            if (identity === '' || password === '') {
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


                            <h1>Login</h1>
                            <input type="text" id="identity" placeholder="Username..." className="identity-input" onChange={(e) => setIdentity(e.target.value)} />
                            <div className="pass-wrapper">
                                <input type={passwordShown ? "text" : "password"} id="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                                <i onClick={togglePasswordVisiblity}>{eye}</i>
                            </div>
                            <input type="submit" value="Login" className="btn-submit" />
                            <Error error={errorL} />
                        </form>
                        <div className="register-now">
                            <p>You don't have an account yet? <Link to="/register">Register now!</Link></p>
                        </div>
                    </StyledForm>
                </StyledMain>
            </StyledWrapper>
        </>
    )
}
export default Login