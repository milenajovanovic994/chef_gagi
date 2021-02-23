import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { getAllRecipes } from "../service"
import Recipe from "./Recipe"

const Recipes = ({ setRecipes, recipes, user }) => {
    const history = useHistory()

    useEffect(() => {
        let mounted = true

        if(!user){
            history.push("/login")
            return
        }

        getAllRecipes().then(res => {
            if(mounted)
                setRecipes(res.data)
        })

        return () => mounted = false
    },[history, setRecipes, user])

    return (
        <>
            
            {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
        </>
    )
}

export default Recipes