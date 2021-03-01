import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import PostRecipe from "./components/PostRecipe";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import StyledNav from "./components/StyledNav";
import StyledLink from "./components/Links/StyledLink";
import StyledLinkRight from "./components/Links/StyledLinkRight";

const App = () => {
	const [user, setUser] = useState(null)
	const [recipes, setRecipes] = useState([])

	return (
		<Router>
			<StyledNav>
				<StyledLink to="/">Home</StyledLink>
				<StyledLink to="/recipes">Recipes</StyledLink>
				<StyledLink to="/postrecipe">Post Recipe</StyledLink>
				{/* <Link to="/">Home</Link> */}
				{/* <Link to="/">Home</Link> */}
				{/* <Link to="/recipes">Recipes</Link> */}
				{/* <Link to="/postrecipe">Post Recipe</Link> */}

				{user ?
					user.username
					:
					<>
						<StyledLinkRight to="/login">Login</StyledLinkRight>
						<StyledLinkRight to="/register">Register</StyledLinkRight>
						{/* <Link to="/login">Login</Link> */}
						{/* <Link to="/register">Register</Link> */}
					</>
				}
			</StyledNav>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/login">
					<Login setUser={setUser} />
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
