import React, { useContext } from 'react';
import './style.css';
import { ContentContext } from '../../App';
import Button from 'react-bootstrap/Button'
export default function Login() {
    const {setNewContext} = useContext(ContentContext);
    return (
        <div className='parentDiv'>
            <div className='login-green'>
                <h1>habitable.</h1>
                <h5>Life's busy. We get it and we got you.</h5>
            </div>
            <div className='login-white'>
                <h1>Log In</h1>
                <input type='text' placeholder='Username'></input>
                <input type='password' placeholder='Password'></input>
                <Button variant="success">Login</Button>
                <div>
                <span>Not a member? <a onClick={()=>{setNewContext(3)}}>sign up</a> for free today!</span>
                </div>
            </div>
        </div>
    )
}
