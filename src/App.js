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
import Community from "./components/Community";
import StyledUser from "./components/StyledUser";
import StyledGagi from "./components/StyledGagi";

const App = () => {
	const [user, setUser] = useState(null)
	const [recipes, setRecipes] = useState([])
	const [userRecipes, setUserRecipes] = useState([])

	return (
		<Router>
			<StyledNav>
				<StyledGagi>Chef Gagi</StyledGagi>
				<StyledLink to="/">Home</StyledLink>
				<StyledLink to="/recipes">Recipes</StyledLink>
				<StyledLink to="/postrecipe">Post Recipe</StyledLink>
				<StyledLink to="/community">Community</StyledLink>

				{user ?
					<StyledUser>
						{user.username}
					</StyledUser>
					:
					<>
						<StyledLinkRight to="/login">Login</StyledLinkRight>
						<StyledLinkRight to="/register">Register</StyledLinkRight>
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
					<PostRecipe user={user} setUserRecipes={setUserRecipes} setUser={setUser} />
				</Route>
				<Route exact path="/community">
					<Community setUserRecipes={setUserRecipes} userRecipes={userRecipes} user={user} setUser={setUser} />
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
