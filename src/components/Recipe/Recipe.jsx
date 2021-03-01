import { useHistory } from "react-router-dom"
import StyledRecipe from "./StyledRecipe"

const Recipe = ({ recipe }) => {
    const history = useHistory()
    return (
        <>
            <StyledRecipe onClick={() => {
                history.push(`/recipes/${recipe._id}`)
            }}>
                <img src={recipe.img} alt="Food"/>
                {/* <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link> */}
                <p>{recipe.title}</p>
                {/* <p>Ingredients: {recipe.ingredients.map(i => `Ingredient: ${i}   `)}</p> */}
                <button onClick={() => {
                    history.push(`/recipes/${recipe._id}`)
                }}>VIEW RECIPE</button>
            </StyledRecipe>
        </>
    )
}
export default Recipe