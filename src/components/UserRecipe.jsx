import StyledUserRecipe from "./StyledUserRecipe"
import StyledWrapper from "./StyledWrapper"

const UserRecipe = ({ recipe }) => {
    return (
        <StyledWrapper style={{ display: 'inline-block' }}>
            <StyledUserRecipe>
                <h4>{recipe.title}</h4>
                <p className="author">By: {recipe.author}</p>
                <img src={recipe.img ? recipe.img : 'https://res.cloudinary.com/milenajovanovic994/image/upload/v1613997883/samples/food/spices.jpg'} alt="Food" />
                <details className="details">
                    <summary>Show recipe</summary>
                    <p><b>INGREDIENTS:</b></p>
                    <ul>
                        {recipe?.ingredients.map(i => <li key={i}>{i}</li>)}
                    </ul>
                    <p><b>INSTRUCTIONS: </b>{recipe.recipe}</p>
                </details>
            </StyledUserRecipe>
        </StyledWrapper>
    )
}
export default UserRecipe