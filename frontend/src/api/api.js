import axios from 'axios'

// Use Vite env access in the browser
const base = import.meta.env.VITE_API_BASE || 'http://localhost:4000'
export async function getRecipes(){
  const r = await axios.get(base + '/api/recipes')
  return r.data
}

export async function addRecipe(body){
  const r = await axios.post(base + '/api/recipes', body)
  return r.data
}
