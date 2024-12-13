import React, { useState } from 'react'
import './Login.css'


const Login = () => {

  const [state, setState] = useState('Sign Up'); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault() 

  }
  return (
    <form className='form'>
      <div className='form-header'>
        <p className='form-title'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
        {
          state === "Sign Up" &&  <div className='form-group'>
          <p>Full name</p>
          <input className='form-input'
            type="text" 
            onChange={(e) => setName(e.target.value)} 
            value={name}/>
        </div>
        }

        <div className='form-group'>
          <p>Email</p>
          <input className='form-input'
            type="text" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}/>
        </div>

        <div className='form-group'>
          <p>Password</p>
          <input className='form-input'
            type="text" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}/>
        </div>

        <button className='form-btn bg-color-primary'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up" 
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-color-primary'>Login here</span></p>
          : <p>Create a new account? <span onClick={() => setState('Sign Up')} className='text-color-primary'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
