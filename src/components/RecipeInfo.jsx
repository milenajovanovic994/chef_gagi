import { useParams } from "react-router-dom"

const RecipeInfo = ({ recipes }) => {
    let { id } = useParams()

    let recipe = recipes.find(r => r.id === Number(id))
    return (
        <>
            <h3>{recipe.title}</h3>
            <p>{recipe.recipe}</p>
            <p>Ingredients: {recipe.ingredients.map(i => `Ingredient: ${i}   `)}</p>
        </>
    )
}
export default RecipeInfo