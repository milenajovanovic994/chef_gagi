import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllRecipes } from "../service"
import Recipe from "./Recipe"
import Select from "./Select"

const Recipes = ({ setRecipes, recipes, user, setUser }) => {
    const [select, setSelect] = useState('')
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

    let options = [...new Set(recipes.map(recipe => recipe.type))]


    return (
        <>
            <header>
                <button onClick={() => {
                    setUser(null)
                    history.push("/login")
                }}>Logout</button>
            </header>
            <main>
                <div>
                    <Select setSelect={setSelect} options={options} />
                </div>
                {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
            </main>
        </>
    )
}

export default Recipes