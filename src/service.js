import axios from 'axios'
import { BASE_URL, COMMUNITY, LOGIN, PORT, RECIPES, USERS } from './constants'

export const getAllRecipes = () => axios.get(`${BASE_URL}${PORT}${RECIPES}`)
export const getAllUserRecipes = () => axios.get(`${BASE_URL}${PORT}${COMMUNITY}`)
export const getAllUsers = () => axios.get(`${BASE_URL}${PORT}${USERS}`)

export const postRecipe = (recipe) => axios.post(`${BASE_URL}${PORT}${RECIPES}`, recipe)
export const postUserRecipe = (recipe) => axios.post(`${BASE_URL}${PORT}${COMMUNITY}`, recipe)
export const postUser = (user) => axios.post(`${BASE_URL}${PORT}${USERS}`, user)

export const loginUser = (user) => axios.post(`${BASE_URL}${PORT}${USERS}${LOGIN}`, user)