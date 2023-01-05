import React from 'react'
import "./signin.css"
import vossrun from './assests/vossrun.jpg';

const Signin = () => {
  return (

    <div className='gpt-center'>
    <div class="text-center">

<div class="container-xl" id="gpt-nathan">
 <h3 id="gpt">Welcome Back!</h3>
 <input type="text" id="inputp" placeholder="UserName"/>
 <input type="text" id="inputp" placeholder="Password"/>
 <button class="n"id="gptn"><span>Login</span></button>
 <p id="sucesso"></p>
</div>

<div class="container-xl" id="gpt-louissaint">
 <img class= "gpt-m"src={vossrun} alt="run"/>
</div>

</div>

 </div>
 
  )
}

export default Signin