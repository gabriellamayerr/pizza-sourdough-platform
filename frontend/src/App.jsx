import { BrowserRouter,Routes,Route } from "react-router-dom"

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

</Routes>

<Route path="/" element={<Home/>} />


</BrowserRouter>

)

}

export default App