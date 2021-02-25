const Recipe = ({ recipe }) => {
    return (
        <>
            <h3>{recipe.title}</h3>
            <p>{recipe.recipe}</p>
            <p>{recipe.author}</p>
            <p>Ingredients: {recipe.ingredients.map(i => `Ingredient: ${i}   `)}</p>
        </>
    )
}
export default Recipe