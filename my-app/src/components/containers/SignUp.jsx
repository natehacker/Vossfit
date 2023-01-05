import React from 'react'
 import "./SignUp.css"
 import thehand from '../assests/thehand.jpg';

const SignUp = () => {
  return (
 
    <div className='gpt-center'>
       <div class="text-center">

<div class="container-xl" id="gpt-nathan">
    <h3 id="gpt">Become a Voss Member Today</h3>
    <input type="text" id="inputp" placeholder="E-mail"/>
    <input type="text" id="inputp" placeholder="Nome"/>
    <input type="password" id="inputp" placeholder="Password"/>
    <input type="password" id="inputp" placeholder="Confirm password"/>
    <button class="n"id="gptn"><span>Join</span></button>
    <p id="sucesso"></p>
</div>

<div class="container-xl" id="gpt-louissaint">
    <img class= "gpt-m"src={thehand} />
</div>

</div>

    </div>
    
   
  )
}

export default SignUp