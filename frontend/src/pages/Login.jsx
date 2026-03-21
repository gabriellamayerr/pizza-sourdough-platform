import React, { useState } from "react"

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

<div>

<h2>Login</h2>

<input placeholder="email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input type="password"
placeholder="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={login}>Login</button>

</div>

)

}
