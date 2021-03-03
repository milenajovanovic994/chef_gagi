import { useHistory } from "react-router-dom"

const User = ({ user, setUser }) => {
    const history = useHistory()
    return (
        <div>
            <p>{user?.username}</p>
            <button onClick={() => {
                setUser(null)
                history.push("/login")
            }}>Logout</button>
        </div>
    )
}
export default User