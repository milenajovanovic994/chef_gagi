import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { getAllUserRecipes } from "../service"
import StyledButton from "./StyledButton"
import StyledRecipies from "./StyledRecipes"
import StyledWrapper from "./StyledWrapper"
import UserRecipe from "./UserRecipe"

const Community = ({ setUserRecipes, userRecipes, user, setUser }) => {
    const history = useHistory()

    useEffect(() => {
        let mounted = true

        if (!user) {
            history.push("/login")
            return
        }

        getAllUserRecipes().then(res => {
            if (mounted)
                setUserRecipes(res.data)
        })

        return () => mounted = false
    }, [history, setUserRecipes, user])

    return (
        <StyledWrapper>
            <StyledButton onClick={() => {
                setUser(null)
                history.push("/login")
            }}>
                Logout
            </StyledButton>
            <StyledRecipies>
                <div className="main-title">
                    <h1>Place for your recipes</h1>
                </div>
                {userRecipes.map(recipe => <UserRecipe key={recipe._id} recipe={recipe} />)}
            </StyledRecipies>
        </StyledWrapper>
    )
}

export default Community