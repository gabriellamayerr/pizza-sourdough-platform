import { useEffect,useState } from "react"

export default function Shop(){

const [products,setProducts] = useState([])

useEffect(()=>{

fetch("http://localhost:4000/api/products")
.then(res=>res.json())
.then(data=>setProducts(data))

},[])

return(

<div>

<h2>Shop</h2>

{products.map(p=>(

<div key={p.id}>

<h3>{p.name}</h3>
<p>${p.price}</p>

</div>

))}

</div>

)

}