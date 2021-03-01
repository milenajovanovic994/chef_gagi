import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllRecipes } from "../service"
import Recipe from "./Recipe/Recipe"
import Select from "./Select"
import Slideshow from "./Slideshow/Slideshow"

const Recipes = ({ setRecipes, recipes, user, setUser }) => {
    const [select, setSelect] = useState('')
    // const [selectIngredient, setSelectIngredient] = useState('')
    // const [search, setSearch] = useState('')
    const history = useHistory()



    useEffect(() => {
        let mounted = true

        if (!user) {
            history.push("/login")
            return
        }

        getAllRecipes().then(res => {
            if (mounted)
                setRecipes(res.data)
        })

        return () => mounted = false
    }, [history, setRecipes, user])

    let dishTypes = [...new Set(recipes.map(recipe => recipe.dishType))]
    // let ingredients = (recipes.map(recipe => recipe.ingredients)).flat()
    // let arr = [...new Set(ingredients)]
    // console.log(arr)


    return (
        <>
            <header>
                <button onClick={() => {
                    setUser(null)
                    history.push("/login")
                }}>Logout</button>
            </header>
            <main>
                <h1>RECIPES</h1>
                <hr />
                <section>
                    <Slideshow recipes={recipes} />
                </section>
                <hr/>
                <div>
                    <Select setSelect={setSelect} options={dishTypes} type='types of food' />
                </div>
                {recipes.filter(r => r.dishType.startsWith(select)).map(recipe => <Recipe key={recipe._id} recipe={recipe} />)}
            </main>
        </>
    )
}

export default Recipes