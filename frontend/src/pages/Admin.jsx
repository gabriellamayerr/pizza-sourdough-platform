import React, { useState } from "react"
import { Box, Heading, Input, Button, Stack } from '@chakra-ui/react'

export default function Admin(){

const [name,setName] = useState("")
const [price,setPrice] = useState("")

const addProduct = async ()=>{

await fetch("http://localhost:4000/api/products",{
 method:"POST",
 headers:{"Content-Type":"application/json"},
 body: JSON.stringify({
    name,
    price,
    description:"New product"
 })
})

alert("Product added")

}

return(

<Box maxW="720px" mx="auto" p={6}>
    <Heading as="h2" size="lg" mb={4}>Admin Dashboard</Heading>
    <Stack spacing={3}>
        <Input placeholder="name" onChange={e=>setName(e.target.value)}/>
        <Input placeholder="price" onChange={e=>setPrice(e.target.value)}/>
        <Button colorScheme="teal" onClick={addProduct}>Add product</Button>
    </Stack>
</Box>

)

}