import { useParams } from "react-router-dom"
import StyledWrapper from "../StyledWrapper"
import StyledRecipeInfo from "./StyledRecipeInfo"

const RecipeInfo = ({ recipes }) => {
    let { id } = useParams()

    let recipe = recipes.find(r => r._id === id)
    return (
        <StyledWrapper>
            <StyledRecipeInfo>
                <div>
                    <h1>{recipe?.title}</h1>
                    <img src={recipe?.img} alt="Food" />
                </div>
                <section className="section-main">
                    <div className="ingredients">
                        <h4>Ingredients:</h4>
                        <ul>
                            {recipe?.ingredients.map(i => <li key={i}>{i}</li>)}
                        </ul>
                    </div>
                    <div className="recipe">
                        <h4>INSTRUCTIONS</h4>
                        <p className="recipe-instruction">{recipe?.recipe}</p>
                    </div>
                </section>
            </StyledRecipeInfo>
        </StyledWrapper>

    )
}
export default RecipeInfo