import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { postRecipe } from "../service"

const PostRecipe = ({ user, setRecipes }) => {
    const [title, setTitle] = useState('')
    const [recipeText, setRecipeText] = useState('')
    const [author, setAuthor] = useState('')
    const history = useHistory()

    return user ? (
        <>
            <h1>Post Recipe</h1>
            <form onSubmit={(e) => {
                e.preventDefault()

                let newRecipe = {
                    recipe: recipeText,
                    author: author,
                    title: title
                }
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
                    <label htmlFor="author">Your name: </label>
                    <input type="text" id="author" onChange={(e) => setAuthor(e.target.value)} />
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