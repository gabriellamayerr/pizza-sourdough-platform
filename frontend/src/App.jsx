import { BrowserRouter,Routes,Route } from "react-router-dom"

import React from "react"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Account from "./pages/Account"
import Admin from "./pages/Admin"

function App(){

return(

<BrowserRouter>

<Routes>


<Route path="/product/:id" element={<Product/>}/>
<Route path="/account" element={<Account/>}/>
<Route path="/admin" element={<Admin/>}/>

<Route path="/" element={<Home/>} />

</Routes>


</BrowserRouter>

)

}

export default App