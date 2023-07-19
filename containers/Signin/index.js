import React, { useEffect, useState } from 'react';
import './style.css';
import { isUserLoggedIn, login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(isUserLoggedIn());

    }, []);

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }
        dispatch(login(user));
        
    }
    if(auth.authenticate){
        return <Navigate to={`/homepg`}/>
        } 
    
    


    return (
        <div className='s-container'>
            <div className='signin-overlay'>
                <img src='./images/close.png' alt='close tag' />
                <h2> Login to SwipTory</h2>

                <form className='fm' onSubmit={userLogin}>
                    <div className='fm1'>
                        <label>
                            Email
                        </label>
                        <input type='email'
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='fm2'>
                        <label>
                            Password
                        </label>
                        <input
                            type='password'
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='login' >Login</button>

                </form>
            </div>
        </div>
    )
}
