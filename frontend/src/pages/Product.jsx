import React, { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

export default function Product(){

const { id } = useParams()
const [product,setProduct] = useState(null)

useEffect(()=>{

fetch(`http://localhost:4000/api/products/${id}`)
.then(res=>res.json())
.then(data=>setProduct(data))

},[id])

if(!product) return <p>Loading...</p>

return(

<div>
<h2>{product.name}</h2>
<p>{product.description}</p>
<p>${product.price}</p>
</div>

)

}