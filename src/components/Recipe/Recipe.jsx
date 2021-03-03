import { useHistory } from "react-router-dom"
import StyledWrapper from "../StyledWrapper"
import StyledRecipe from "./StyledRecipe"

const Recipe = ({ recipe }) => {
    const history = useHistory()
    return (
        <StyledWrapper style={{ display: 'inline-block' }}>
            <StyledRecipe onClick={() => {
                history.push(`/recipes/${recipe._id}`)
            }}>
                <img src={recipe.img} alt="Food" />
                <h4>{recipe.title}</h4>
                <button className="btn-recipe" onClick={() => {
                    history.push(`/recipes/${recipe._id}`)
                }}>VIEW RECIPE</button>
            </StyledRecipe>
        </StyledWrapper>
    )
}
export default Recipe