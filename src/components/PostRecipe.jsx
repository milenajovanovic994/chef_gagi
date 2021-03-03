import { useState } from "react"
import { Redirect, useHistory } from "react-router-dom"
import { postUserRecipe } from "../service"
import StyledButton from "./StyledButton"
import StyledPostRecipe from "./StyledPostRecipe"
import StyledWrapper from "./StyledWrapper"

const PostRecipe = ({ user, setUserRecipes, setUser }) => {
    const [title, setTitle] = useState('')
    const [recipeText, setRecipeText] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [img, setImg] = useState('')
    const history = useHistory()

    return user ? (
        <StyledWrapper>
            <StyledButton onClick={() => {
                setUser(null)
                history.push("/login")
            }}>Logout</StyledButton>
            <StyledPostRecipe>
                <h1 className="highlight">Post Recipe</h1>
                <form className="post-form" onSubmit={(e) => {
                    e.preventDefault()

                    let ing = ingredients.split(',')

                    let newRecipe = {
                        recipe: recipeText,
                        author: user.username,
                        title: title,
                        ingredients: ing,
                        img: img
                    }
                    console.log(newRecipe)
                    postUserRecipe(newRecipe).then(res => {
                        setUserRecipes(prev => [...prev, res.data])
                    })
                    history.push("/community")

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
                        <label htmlFor="recipe-list">List of your ingredients (separated by comma): </label> <br />
                        <input type="text" id="recipe-list" placeholder="ex: carrot, beans, oil..." onChange={(e) => setIngredients(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="recipe-img">Image url: </label> <br />
                        <input type="text" id="recipe-img" placeholder="Paste here url of your image if you have it..." onChange={(e) => setImg(e.target.value)} />
                    </div>
                    <div>
                        <input type="submit" value="Post Recipe!" className="btn" />
                    </div>
                </form>
            </StyledPostRecipe>
        </StyledWrapper>
    )
        :
        (
            <Redirect to="/login" />
        )
}
export default PostRecipe