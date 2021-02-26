import { useHistory } from "react-router-dom"
import StyledRecipe from "./StyledRecipe"

const Recipe = ({ recipe }) => {
    const history = useHistory()
    return (
        <>
            <StyledRecipe onClick={() => {
                history.push(`/recipes/${recipe.id}`)
            }}>
                <img src={recipe.img} alt="Food"/>
                {/* <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link> */}
                <p>{recipe.title}</p>
                <button onClick={() => {
                    history.push(`/recipes/${recipe.id}`)
                }}>VIEW RECIPE</button>
                {/* <p>Ingredients: {recipe.ingredients.map(i => `Ingredient: ${i}   `)}</p> */}
            </StyledRecipe>
        </>
    )
}
export default Recipe