import axios from 'axios'
import { BASE_URL, COMMUNITY, LOGIN, RECIPES, USERS } from './constants'

export const getAllRecipes = () => axios.get(`${BASE_URL}${RECIPES}`)
export const getAllUserRecipes = () => axios.get(`${BASE_URL}${COMMUNITY}`)
export const getAllUsers = () => axios.get(`${BASE_URL}${USERS}`)

export const postRecipe = (recipe) => axios.post(`${BASE_URL}${RECIPES}`, recipe)
export const postUserRecipe = (recipe) => axios.post(`${BASE_URL}${COMMUNITY}`, recipe)
export const postUser = (user) => axios.post(`${BASE_URL}${USERS}`, user)

export const loginUser = (user) => axios.post(`${BASE_URL}${USERS}${LOGIN}`, user)