import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllRecipes } from "../service"
import Recipe from "./Recipe/Recipe"
import Select from "./Select"
import StyledButton from "./StyledButton"
import StyledRecipies from "./StyledRecipes"
import StyledWrapper from "./StyledWrapper"

const Recipes = ({ setRecipes, recipes, user, setUser }) => {
    const [select, setSelect] = useState('')
    const history = useHistory()

    useEffect(() => {
        let mounted = true

        if (!user) {
            history.push("/login")
            return
        }

        getAllRecipes().then(res => {
            if (mounted)
                setRecipes(res.data)
        })

        return () => mounted = false
    }, [history, setRecipes, user])

    let dishTypes = [...new Set(recipes.map(recipe => recipe.dishType))]

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
                    <h1>RECIPES</h1>
                </div>
                <div className="div-select">
                    <Select setSelect={setSelect} options={dishTypes} type='types of food' />
                </div>
                {recipes.filter(r => r.dishType.startsWith(select)).map(recipe => <Recipe key={recipe._id} recipe={recipe} />)}
            </StyledRecipies>
        </StyledWrapper>
    )
}

export default Recipes