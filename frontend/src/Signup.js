import React from 'react'
import { Link , useNavigate } from 'react-router-dom';
import validation from './SignupValidation';
import { useState } from 'react';
import axios from 'axios';


function Signup() {

  const [values , setValues] = useState({
    name : '',
    email: '',
    password: ''
})
const navigate = useNavigate();
const [errors, setErrors] = useState({})

const handleInput =(event) => {
  setValues(prev => ({...prev ,[event.target.name]: [event.target.value]}))
}
const handleSubmit = (event) => {
  event.preventDefault();
  const err = validation(values);
  setErrors(err);
  if( err.name === "" && err.email === "" && err.password === "") {
    axios.post('http://localhost:8081/signup', values)
    .then(res => {
      navigate('/');
    })
    .catch(err => console.log(err));
  }
}

    const divStyle = {
        backgroundColor: ' rgb(247, 241, 241)',
       
      };
      const firstDivStyle = {
        backgroundColor: 'rgb(255,250,250)',
      };
      const loginButtonStyle = {
        backgroundColor: '#8bf7cd', 
        color: '#014f29',
        border: 'none',
        
      };
      const createButtonStyle = {
       backgroundColor : '#b672e3',
       border: 'none',
       color: '#48076b',
      };
  return (
    <div className='d-flex justify-content-center align-items-center custom-bg vh-100' style={firstDivStyle}>
    <div className='custom-bg p-3 rounded w-25'  style={divStyle}>
        <h2>Sign-Up</h2>
        <form action='' onSubmit={handleSubmit}>
        <div className='mb-3'>
         <label htmlFor='name'> <strong>Name</strong> </label> 
         <input type='text' placeholder='Enter Name' name='name'
         onChange={handleInput}  className='form-control rounded-0'/> 
           {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div> 

           <div className='mb-3'>
         <label htmlFor='email'> <strong> Email </strong> </label> 
         <input type='email' placeholder='Enter Email'name='email'
         onChange={handleInput}  className='form-control rounded-0'/> 
           {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div> 

            <div className='mb-3'>
         <label htmlFor='password'> <strong> Password </strong> </label> 
         <input type='password' placeholder='Enter Password' name = 'password'
         onChange={handleInput}  className='form-control rounded-0'/> 
           {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div> 

            <button  type='submit' className='btn btn-success w-100 rounded-0' style={loginButtonStyle}> Sign up </button>
            <p> You agree to our terms and policies</p>
            <Link to='/' className='btn btn-default border w-100 rounded-0 text-decoration-none' style={createButtonStyle}>Login</Link>
        </form>
    </div>
    </div>
  )
}

export default Signup