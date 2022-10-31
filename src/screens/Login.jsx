


import React, { useState, useEffect } from 'react'
import userImage from '../images/user.webp'
import { auth } from '../firebase/Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const user = localStorage.getItem("uid");

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    })

    const login = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log('sign in ', userCredential.user);
                localStorage.setItem('uid', userCredential.user.uid)
                navigate('/home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (email === '' || password === '') {
                    alert('Please fill out all the fields')
                }
                else {
                    console.log('sign in error', errorMessage);
                    alert(errorMessage)
                }
            });
    }

    return (
        <div className='form-container'>
            <img src={userImage} />
            <form onSubmit={login}>
                <h1>Login</h1>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' />
                <div className='btn-container'>
                    <button className='btn btn-primary'>Login</button>
                    <Link to="/signup">Sign up</Link>
                </div>
            </form>
        </div>



    )
}

export default Login