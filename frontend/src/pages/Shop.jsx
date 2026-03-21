import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Box, Heading, Input, Button, Stack, Text } from '@chakra-ui/react'

export default function Shop(){

 const [products,setProducts] = useState([])
 const [query,setQuery] = useState("")
 const [cart,setCart] = useState([])

 const addToCart = (product)=>{
    setCart(prev => [...prev,product])
 }

 useEffect(()=>{
    fetch("http://localhost:4000/api/products")
    .then(res=>res.json())
    .then(data=>setProducts(data))
 },[])

 const search = async () => {
    const res = await fetch(`http://localhost:4000/api/products/search?q=${encodeURIComponent(query)}`)
    const data = await res.json()
    setProducts(data)
 }

 return(
    <Box maxW="800px" mx="auto" p={6}>
     <Heading as="h2" size="lg" mb={4}>Shop</Heading>

     <Stack direction="row" mb={4} spacing={3}>
         <Input placeholder="Search products..." value={query} onChange={(e)=>setQuery(e.target.value)} />
         <Button onClick={search} colorScheme="teal">Search</Button>
     </Stack>

     {products.map(p=> (
         <Box key={p.id} borderBottom="1px" borderColor="gray.200" py={3}>
             <Link to={`/product/${p.id}`} style={{textDecoration:'none'}}>
                 <Heading as="h3" size="md">{p.name}</Heading>
             </Link>
             <Text>${p.price}</Text>
             <Button size="sm" mt={2} onClick={()=>addToCart(p)}>Add to cart</Button>
         </Box>
     ))}

    </Box>
 )
}
