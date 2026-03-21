import React, { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Product(){

const { id } = useParams()
const [product,setProduct] = useState(null)

useEffect(()=>{

fetch(`http://localhost:4000/api/products/${id}`)
.then(res=>res.json())
.then(data=>setProduct(data))

},[id])

if(!product) return <Text p={6}>Loading...</Text>

return(
	<Box maxW="700px" mx="auto" p={6}>
		<Heading as="h2" size="lg" mb={3}>{product.name}</Heading>
		<Text mb={2}>{product.description}</Text>
		<Text fontWeight="bold">${product.price}</Text>
	</Box>
)

}