import { BrowserRouter,Routes,Route,Link } from "react-router-dom"

import React from "react"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Account from "./pages/Account"
import Admin from "./pages/Admin"
import Shop from "./pages/Shop"
import Login from "./pages/Login"

function App(){

return(

<BrowserRouter>

<nav style={{padding:8,background:'#f7f7f7'}}>
	<Link to="/" style={{marginRight:12}}>Home</Link>
	<Link to="/shop" style={{marginRight:12}}>Shop</Link>
	<Link to="/account" style={{marginRight:12}}>Account</Link>
	<Link to="/admin" style={{marginRight:12}}>Admin</Link>
	<Link to="/login" style={{marginRight:12}}>Login</Link>
</nav>

<Routes>


<Route path="/product/:id" element={<Product/>}/>
<Route path="/account" element={<Account/>}/>
<Route path="/admin" element={<Admin/>}/>

<Route path="/shop" element={<Shop/>} />
<Route path="/login" element={<Login/>} />

<Route path="/" element={<Home/>} />

</Routes>


</BrowserRouter>

)

}

export default App