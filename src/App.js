import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Recipes from "./components/Recipes";
import PostRecipe from "./components/PostRecipe";

const App = () => {
	const [user, setUser] = useState(null)
	const [recipes, setRecipes] = useState([])
	const [error, setError] = useState('')

	return (
		<Router>
			<nav>
				<Link to="/recipes">Recipes</Link>
				<Link to="/postrecipe">Post Recipe</Link>

				{user ?
					user.username
					:
					<>
						<Link to="/">Home</Link>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</>
				}

			</nav>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/login">
					<Login setUser={setUser} error={error} setError={setError} />
				</Route>
				<Route exact path="/register">
					<Register error={error} setError={setError} />
				</Route>
				<Route exact path="/recipes">
					<Recipes setRecipes={setRecipes} recipes={recipes} user={user} />
				</Route>
				<Route exact path="/postrecipe">
					<PostRecipe user={user} setRecipes={setRecipes} />
				</Route>
			</Switch>

		</Router>
	)
}

export default App;
