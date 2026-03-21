import React from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/react'

export default function Account(){

return(

<Box maxW="720px" mx="auto" p={6}>
	<Heading as="h2" size="lg" mb={3}>My Account</Heading>
	<Text mb={4}>Welcome baker 👨‍🍳</Text>
	<Button onClick={()=>{ localStorage.removeItem("token"); window.location="/login" }} colorScheme="red">Logout</Button>
</Box>

)

}