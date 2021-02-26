import { useParams } from "react-router-dom"
import StyledRecipeInfo from "./StyledRecipeInfo"

const RecipeInfo = ({ recipes }) => {
    let { id } = useParams()

    let recipe = recipes.find(r => r.id === Number(id))
    return (
        <StyledRecipeInfo>
            <h1>{recipe?.title}</h1>
            <img src={recipe?.img} alt="Food" />
            <hr />
            <div className="ingredients">
                <p>Ingredients:</p>
                <ul>
                    {recipe?.ingredients.map(i => <li key={recipe?.id}>{i}</li>)}
                </ul>
            </div>
                <hr />
                <div className="recipe">
                    <h4>INSTRUCTIONS</h4>
                    <p>{recipe?.recipe}</p>
                </div>
        </StyledRecipeInfo>
    )
}
export default RecipeInfo