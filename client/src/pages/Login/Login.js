import React from 'react'
import './style.css';
export default function Login() {
    return (
        <div className='login-green'>
            <div className='login-white'>
                <h1>Log In</h1>
                <input type='text' placeholder='Username'></input>
                <input type='password' placeholder='Password'></input>
            </div>
        </div>
    )
}
