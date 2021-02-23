import { useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllUsers, postUser } from "../service"

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const history = useHistory()

    const isValid = (arr) => {
        if (username.length >= 4 &&
            !arr.find(user => user.username === username || user.email === email) &&
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

                getAllUsers().then(res => {
                    if(isValid(res.data)){
                        let user = {
                            username: username,
                            email: email,
                            password: pass
                        }
                        postUser(user)
                        history.push('/login')
                    }
                    else if (res.data.find(user => user.username === username || user.email === email)) {
                        console.log('Username already exists or another user is already registrated using this email!')
                    }
                    else if (username.length < 4) {
                        console.log('Username must include at least 4 characters!')
                    }
                    else if (/^[a-zA-Z]+$/.test(pass) ||
                        /^\d+$/.test(pass) || pass.length < 8) {
                        console.log('Password must include 8 characters or more, at least one number and one letter!')
                    }
                })
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
                    <input type="submit" value="Register"/>
                </div>
            </form>
        </>
    )
}
export default Register