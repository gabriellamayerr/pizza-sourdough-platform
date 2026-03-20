import React, { useEffect, useState } from 'react'
import { getRecipes, addRecipe } from '../api/api'

export default function Home(){
  const [recipes, setRecipes] = useState([])
  useEffect(()=>{ getRecipes().then(setRecipes) },[])

  const [query, setQuery] = useState("")

  async function handleSubmit(e){
    e.preventDefault()
    const name = e.target.name.value
    const type = e.target.type.value
    const ingredients = e.target.ingredients.value.split(',').map(s=>s.trim()).filter(Boolean)
    const notes = e.target.notes.value
    await addRecipe({ name, type, ingredients, notes })
    setRecipes(await getRecipes())
    e.target.reset()
  }

    const search = async () => {
      const res = await fetch(
        `http://localhost:4000/api/products/search?q=${encodeURIComponent(
          query
        )}`
      )

      const data = await res.json()
      setRecipes(data)
    }
  return (
    <main>
      <h1>Sourdough Pizza & Bread</h1>

{/* ✅ SEARCH BAR */}
<input 
 placeholder="Search products..."
 data-testid="search-input"
 onChange={(e)=>setQuery(e.target.value)}
/>

<button 
 data-testid="search-button"
 onClick={search}
>
 Search
</button>

      <section>
        <h2>Add Recipe</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" required />
          <input name="type" placeholder="Type" required />
          <input name="ingredients" placeholder="Comma-separated ingredients" />
          <input name="notes" placeholder="Notes" />
          <button type="submit">Add</button>
        </form>
      </section>
    </main>
  )
}
