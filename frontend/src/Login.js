import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';

function Login({ handleLogin }) { // Accept handleLogin as a prop
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const divStyle = {
    backgroundColor: 'rgb(247, 241, 241)'
  };
  const firstDivStyle = {
    backgroundColor: 'rgb(255, 250, 250)'
  };
  const loginButtonStyle = {
    backgroundColor: '#8bf7cd',
    color: '#014f29',
    border: 'none'
  };
  const createButtonStyle = {
    backgroundColor: '#b672e3',
    border: 'none',
    color: '#48076b'
  };
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] })); // Remove the square brackets around event.target.value
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const err = validation(values);
    setErrors(err);
    if (err.email === '' && err.password === '') {
      axios
        .post('http://localhost:8081/login', values)
        .then((res) => {
          if (res.data === 'Success') {
            handleLogin(); // Call the handleLogin function
            navigate('/home');
          } else {
            alert('No record existed');
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center custom-bg vh-100" style={firstDivStyle}>
      <div className="custom-bg p-3 rounded w-25" style={divStyle}>
        <h2>
          {' '}
          <strong>Sign-In</strong>
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              {' '}
              <strong>Email </strong>{' '}
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              {' '}
              <strong> Password </strong>{' '}
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0" style={loginButtonStyle}>
            {' '}
            Login{' '}
          </button>
          <p> You agree to our terms and policies</p>
          <Link to="/signup" className="btn btn-default border w-100 rounded-0 text-decoration-none" style={createButtonStyle}>
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;


/*

import React from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import validation from './LoginValidation';
import axios from 'axios';



function Login() {
    const [values , setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
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
      const handleInput =(event) => {
        setValues(prev => ({...prev ,[event.target.name]: [event.target.value]}))
      }
      const handleSubmit =(event) => {
        event.preventDefault();
        const err = validation(values);
        setErrors(err);
        if(err.email === "" && err.password === "") {
          axios.post('http://localhost:8081/login', values)
          .then(res => {
            if(res.data === "Success") {
              navigate('/home');
            }
            else{
              alert("No record existed");
            }
          })
          .catch(err => console.log(err));
        }
      }
  return (
    <div className='d-flex justify-content-center align-items-center custom-bg vh-100' style={firstDivStyle}>
        <div className='custom-bg p-3 rounded w-25'  style={divStyle}>
            <h2> <strong>Sign-In</strong></h2>
            <form action='' onSubmit={handleSubmit}>
               <div className='mb-3'>
             <label htmlFor='email'> <strong>Email </strong> </label> 
             <input type='email' placeholder='Enter Email' name='email'
             onChange={handleInput} className='form-control rounded-0'/> 
             {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div> 

                <div className='mb-3'>
             <label htmlFor='password'> <strong> Password </strong> </label> 
             <input type='password' placeholder='Enter Password' name='password'
              onChange={handleInput} className='form-control rounded-0'/> 
              {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div> 

                <button type='submit' className='btn btn-success w-100 rounded-0' style={loginButtonStyle}> Login </button>
                <p> You agree to our terms and policies</p>
                <Link to='/signup' className='btn btn-default border w-100 rounded-0 text-decoration-none' style={createButtonStyle}>Create Account</Link>
            </form>
        </div>
        </div>
  )
}

export default Login

*/
