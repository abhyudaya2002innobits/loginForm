
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
// import Home from './Home';
const LoginForm = () => {
    const navigate = useNavigate();
    // const [signup,setSignup]=useState("signup")
    const { handleSubmit, register, formState: { errors} } = useForm();
    const onSignup = (data:any) => {
        navigate("/contact")
        
        }; 
    return (
      <>
        <div className='form'>
          <form className='form-content' onSubmit={handleSubmit(onSignup)}>
            <label>
              Enter your email:
              <input
                className={'email-box'}
                type='email'
                placeholder='Email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
               
              />
              
              
              {errors.email && <div className="error-message">{String(errors.email.message)}</div>}
            </label>
            <label>
              Enter Password
              <input
                className={'password-box'}
                type='password'
                placeholder='Password'
                {...register('password', {
                  required: 'Password is required',
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                    message: 'Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.',
                  },
                })}
                
                
                />
                {errors.password && <div className="error-message">{String(errors.password.message)}</div>}
            </label>
            <label >
                Age:
                <input
                type="number"
                placeholder="Age"
                {...register('age', {
                  required: 'Age is required',
                  min: { value: 18, message: 'Age should be greater than or equal to 18.' },
                  max: { value: 99, message: 'Age should be less than or equal to 99.' },
                  pattern: { value: /^[0-9]*$/, message: 'Please enter a valid age.' },
                })}
              />
              {errors.age && <div className="error-message">{String(errors.age.message)}</div>}
  
              
  
              </label>
              
              <button className="inputButton" onClick={onSignup} type='submit'>
              signup
          </button>
          
          </form>
          
        </div>
      </>
    );
  };

export default LoginForm
              
              
              
            
        

            
           
          