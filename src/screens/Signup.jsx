

import { auth } from "../firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userImage from '../images/user.webp'
const Signup = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const user = localStorage.getItem("uid");
    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    }, []);

    const signup = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                navigate('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (firstname === '' || lastname === '' || number === '' || email === '' || password === '') {
                    alert('Please fill out all the fields')
                }
                else {
                    console.log('sign up error', errorMessage)
                    alert(errorMessage)
                }
            });
    }

    return (
        <div className='form-container'>
            <img src={userImage} />
            <form onSubmit={signup}>
                <h1>Sign up</h1>
                <input onChange={(e) => setFirstname(e.target.value)} type="text" placeholder='Enter first name' />
                <input onChange={(e) => setLastname(e.target.value)} type="text" placeholder='Enter last name' />
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter email' />
                <input onChange={(e) => setNumber(e.target.value)} type="number" placeholder='Enter contact number' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' />
                <div className='btn-container'>
                    <button className="btn btn-primary">Sign up</button>
                    <Link to="/">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Signup