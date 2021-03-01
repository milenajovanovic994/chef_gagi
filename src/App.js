import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Recipes from "./components/Recipes";
import PostRecipe from "./components/PostRecipe";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo";
import About from "./components/About";
import StyledLink from "./components/Links/StyledLink";

const App = () => {
	const [user, setUser] = useState(null)
	const [recipes, setRecipes] = useState([])

	return (
		<Router>
			<nav>
				<StyledLink to="/">Home</StyledLink>
				{/* <Link to="/">Home</Link> */}
				<Link to="/about">About Gagi</Link>
				<Link to="/recipes">Recipes</Link>
				<Link to="/postrecipe">Post Recipe</Link>

				{user ?
					user.username
					:
					<>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</>
				}

			</nav>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/login">
					<Login setUser={setUser} user={user} />
				</Route>
				<Route exact path="/register">
					<Register />
				</Route>
				<Route path="/recipes/:id">
                    <RecipeInfo recipes={recipes} />
                </Route>
				<Route exact path="/recipes">
					<Recipes setRecipes={setRecipes} recipes={recipes} user={user} setUser={setUser} />
				</Route>
				<Route exact path="/postrecipe">
					<PostRecipe user={user} setRecipes={setRecipes} setUser={setUser} />
				</Route>
			</Switch>

		</Router>
	)
}

export default App;
