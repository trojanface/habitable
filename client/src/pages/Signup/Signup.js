import React, { useContext } from 'react';
import './style.css';
import { ContentContext } from '../../App';
import Button from 'react-bootstrap/Button'
export default function Signup() {
    const {setNewContext} = useContext(ContentContext);
    return (
        <div className='parentDiv'>
            <div className='login-green'>
                <h1>habitable.</h1>
                <h5>Life's busy. We get it and we got you.</h5>
            </div>
            <div className='login-white'>
                <h1>Sign Up</h1>
                <input type='text' placeholder='Username'></input>
                <input type='password' placeholder='Password'></input>
                <input type='email' placeholder='Email'></input>
                <input type='text' placeholder='First Name'></input>
                <input type='text' placeholder='Last Name'></input>
                <input type='date' placeholder='DOB'></input>
                <Button variant="success">Sign Up</Button>
                <div>
                <span>Already a member? <a onClick={()=>{setNewContext(2)}}>login</a> instead.</span>
                </div>
            </div>
        </div>
    )
}

