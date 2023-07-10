import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:3000/api/v1/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email: username,
      password
    });
    console.log(token);
    setToken(token);
  }

  return(
    <div className="login-wrapper bg-cyan-400 h-screen">
    <h1 className='text-4xl text-white font-bold py-10'>Please Log In</h1>
    <div className='bg-white h-[50%] w-[60%] flex justify-center rounded-md shadow-md'>
      <form onSubmit={handleSubmit}>
        <label>
          <p className='text-3xl font-semibold py-4'>Username</p>
          <input type="text" className='h-10 flex justify-center w-[350px] text-black font-semibold' onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p className='text-3xl font-semibold py-4'>Password</p>
          <input type="password" className='h-10 flex justify-center w-[350px] text-black font-semibold' onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" className='h-[40px] bg-cyan-500 w-[100px] text-2xl font-semibold text-white rounded-lg my-5'>Submit</button>
        </div>
      </form>
    </div>
      
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};