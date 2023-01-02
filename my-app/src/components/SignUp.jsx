import React from 'react'
import "./SignUp.css"

const SignUp = () => {
  return (
    
          <div class="cont">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>       
         <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required/>
         <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
          <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
        
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
         </div>
  
   
  )
}

export default SignUp