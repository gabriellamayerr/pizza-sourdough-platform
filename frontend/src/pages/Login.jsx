import React, { useState } from "react"
import { Box, Heading, Input, Button, Stack } from '@chakra-ui/react'

export default function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const login = async ()=>{

const res = await fetch("http://localhost:4000/api/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({email,password})
})

if(res.status===200){
alert("Login success")
}else{
alert("Login failed")
}

}

return(

<Box maxW="480px" mx="auto" p={6}>
	<Heading as="h2" size="lg" mb={4}>Login</Heading>
	<Stack spacing={3}>
		<Input placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
		<Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
		<Button colorScheme="teal" onClick={login}>Login</Button>
	</Stack>
</Box>

)

}
