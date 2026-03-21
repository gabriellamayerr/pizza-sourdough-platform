import React from 'react'

export default function Account(){

return(

<div>

<h2>My Account</h2>

<p>Welcome baker 👨‍🍳</p>

<button onClick={()=>{
 localStorage.removeItem("token")
 window.location="/login"
}}>
 Logout
</button>

</div>

)

}