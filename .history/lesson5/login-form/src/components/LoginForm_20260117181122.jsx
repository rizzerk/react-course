import { useState } from 'react'
import './LoginForm.css';


export function LoginForm(){
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword(){
    setShowPassword(!showPassword);
  }

  return(
    <>
      <div>
        <input placeholder="Email"/>
      </div>
      <div>
        <input 
          placeholder="Password" 
          type={showPassword ? 'text' : 'password'}
        />
        <button onClick={toggleShowPassword}>
          {showPassword ? 'hide' : 'show' }
        </button>
      </div>
      <button className="login-button">Login</button>  
      <button className="signup-button">Sign up</button> 
    </>
  )
}

export default LoginForm;