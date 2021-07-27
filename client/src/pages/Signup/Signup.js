import React, { useContext, useState } from 'react';
import './style.css';
import { ContentContext } from '../../App';
import Button from 'react-bootstrap/Button'
export default function Signup() {
    const {setNewContext} = useContext(ContentContext);

    const [signupField , setSignupField] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: ''
        })

    const inputsHandler = (e) =>{
        setSignupField( {...signupField, [e.target.name]: e.target.value} )
    }

    const submitButton = (event) =>{
        event.preventDefault();
        console.log(JSON.stringify(signupField));
       // alert(signupField.first_name);
        fetch('users.php', {
            method: 'POST',
            headers:"Content-Type: application/json",
            body: JSON.stringify(signupField)
          })
          .then(response => response.text());
    }


    return (
        <div className='parentDiv'>
            <div className='login-green'>
                <h1>habitable.</h1>
                <h5>Life's busy. We get it and we got you.</h5>
            </div>
            <form className='login-white'  name="form" onSubmit={submitButton}>
                <h1>Sign Up</h1>
                <input type='text' name="username" onChange={inputsHandler} placeholder='Username' value={signupField.username}></input>
                <input type='password' name="password" onChange={inputsHandler} placeholder='Password' value={signupField.password}></input>
                <input type='email' name="email" onChange={inputsHandler} placeholder='Email' value={signupField.email}></input>
                <input type='text' name="first_name" onChange={inputsHandler} placeholder='First Name' value={signupField.first_name}></input>
                <input type='text' name="last_name" onChange={inputsHandler} placeholder='Last Name' value={signupField.last_name}></input>
                <input type='date' name="DOB" onChange={inputsHandler} placeholder='DOB' value={signupField.dob}></input>
                {/* <Button onClick={submitButton} variant="success">Sign Up</Button> */}
                <input type = "submit" />
                <div>
                <span>Already a member? <a onClick={()=>{setNewContext(2)}}>login</a> instead.</span>
                </div>
            </form>
        </div>
    )
}

