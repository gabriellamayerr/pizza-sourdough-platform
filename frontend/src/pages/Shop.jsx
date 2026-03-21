import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
  const res = await fetch(
   `http://localhost:4000/api/products/search?q=${encodeURIComponent(query)}`
  )
  const data = await res.json()
  setProducts(data)
 }

 return(
  <div>
   <h2>Shop</h2>

   <input 
    placeholder="Search products..."
    onChange={(e)=>setQuery(e.target.value)} 
   />

   <button onClick={search}>
    Search
   </button>

   {products.map(p=>(
    <div key={p.id} style={{borderBottom:'1px solid #eee',padding:'8px 0'}}>
     <Link to={`/product/${p.id}`}><h3>{p.name}</h3></Link>
     <p>${p.price}</p>
     <button onClick={()=>addToCart(p)}>Add to cart</button>
    </div>
   ))}

  </div>
 )
}
