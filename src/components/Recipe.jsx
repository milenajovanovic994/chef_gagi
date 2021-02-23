const Recipe = ({ recipe }) => {
    return (
        <>
            <h3>{recipe.title}</h3>
            <p>{recipe.recipe}</p>
            <p>{recipe.author}</p>
        </>
    )
}
export default Recipe