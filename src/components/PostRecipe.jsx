import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { postRecipe } from "../service"

const PostRecipe = ({ user, setRecipes }) => {
    const [title, setTitle] = useState('')
    const [recipeText, setRecipeText] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [dishType, setDishType] = useState('')
    const history = useHistory()

    return user ? (
        <>
            <h1>Post Recipe</h1>
            <form onSubmit={(e) => {
                e.preventDefault()

                let ing = ingredients.split(',')

                let newRecipe = {
                    recipe: recipeText,
                    author: user.username,
                    title: title,
                    ingredients: ing,
                    dishType: dishType
                }
                console.log(newRecipe)
                postRecipe(newRecipe).then(res => {
                    setRecipes(prev => [...prev, res.data])
                })
                history.push("/recipes")

            }}>
                <div>
                    <label htmlFor="recipe-title">Title of your recipe: </label> <br />
                    <input type="text" id="recipe-title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="recipe-text">Recipe: </label> <br />
                    <textarea id="recipe-text" cols="30" rows="10" onChange={(e) => setRecipeText(e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="recipe-title">List of your ingredients: </label> <br />
                    <input type="text" id="recipe-title" onChange={(e) => setIngredients(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="recipe-title">Dish type: </label> <br />
                    <input type="text" id="recipe-title" onChange={(e) => setDishType(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Post Recipe!" />
                </div>

            </form>
        </>
    )
        :
        (
            <>
                <p>You need to be logged in to post a recipe...</p>
                <Link to="/login">Login</Link>
            </>
        )
}
export default PostRecipe