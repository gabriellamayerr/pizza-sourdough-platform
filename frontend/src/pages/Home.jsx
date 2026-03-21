import React, { useEffect, useState } from 'react'
import { getRecipes, addRecipe } from '../api/api'
import {
  Box,
  Heading,
  Input,
  Button,
  Stack,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

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
      `http://localhost:4000/api/products/search?q=${encodeURIComponent(query)}`
    )
    const data = await res.json()
    setRecipes(data)
  }

  return (
    <Box maxW="800px" mx="auto" p={6}>
      <Heading as="h1" size="xl" mb={4}>Sourdough Pizza & Bread</Heading>

      <Stack direction="row" mb={6} spacing={3}>
        <Input placeholder="Search products..." value={query} onChange={(e)=>setQuery(e.target.value)} />
        <Button colorScheme="teal" onClick={search}>Search</Button>
      </Stack>

      <Box as="section" mb={8}>
        <Heading as="h2" size="lg" mb={4}>Add Recipe</Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl>
              <Input name="name" placeholder="Name" required />
            </FormControl>
            <FormControl>
              <Input name="type" placeholder="Type" required />
            </FormControl>
            <FormControl>
              <Input name="ingredients" placeholder="Comma-separated ingredients" />
            </FormControl>
            <FormControl>
              <Input name="notes" placeholder="Notes" />
            </FormControl>
            <Button type="submit" colorScheme="blue">Add</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
