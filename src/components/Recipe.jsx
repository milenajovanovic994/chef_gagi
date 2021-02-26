import { Link, useHistory } from "react-router-dom"

const Recipe = ({ recipe }) => {
    const history = useHistory()
    return (
        <>
            <div onClick={() => {
                history.push(`/recipes/${recipe.id}`)
            }}>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                {/* <h3>{recipe.title}</h3> */}
                <p>{recipe.author}</p>
                {/* <p>Ingredients: {recipe.ingredients.map(i => `Ingredient: ${i}   `)}</p> */}
            </div>
        </>
    )
}
export default Recipe