import React, { useState } from "react"

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

<div>

<h2>Admin Dashboard</h2>

<input placeholder="name" onChange={e=>setName(e.target.value)}/>
<input placeholder="price" onChange={e=>setPrice(e.target.value)}/>

<button onClick={addProduct}>
 Add product
</button>

</div>

)

}