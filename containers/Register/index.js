import React, { useState } from 'react';
import './style.css';
import {register} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import state from '../../reducers/user.reducers'


export default function Register() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state= state.user)

    const userSignup = (e) => {
        e.preventDefault();

        const user = {
           userName, email, password
        }
        dispatch(register(user));
       
    }
if(user.loading){
    return <p>Loading...</p>
    
}
  return (
  <div className='r-container'>
            <img src='./images/close.png' alt='close tag'/>
            <h2> Register to SwipTory</h2>

            <form className='fm' onSubmit={userSignup}>
            <div className='fm1'>
                    <label>
                        Username
                        </label>
                            <input 
                            type='text'
                             value={userName}
                             placeholder='Username'
                             onChange={(e)=> setUserName(e.target.value)} />
                            </div>
                <div className='fm2'>
                    <label>
                        Email
                        </label>
                            <input 
                            type='email' 
                            value={email}
                            placeholder='Email'
                            onChange={(e)=> setEmail(e.target.value)} />

                            </div>

                            <div className='fm3'>
                                <label>
                                    Password
                                 </label>
                                        <input 
                                        type='password'
                                        value={password} 
                                        placeholder='Password'
                                        onChange={(e)=> setPassword(e.target.value)} />
                             </div>
                             <button type='submit' className='reg' >Register</button>

            </form>

    </div>
  )
}
