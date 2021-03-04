import React from 'react';
import './sign.styles.css';

class SignIn extends React.Component{

    constructor()
    {
        super();
    }

    render(){
        return(
            
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
    
            <form >
              
                <input name='email'
                type='email'
                label='email'
                placeholder='Enter Email'
                required></input>
              <br/> 
              <input 
                name='password'
                type='password' 
                label='password'
                placeholder='Enter Password'
                required></input>
        
              <div className='buttons'>
                <button type='submit'> Sign in </button>
                <button >
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>

        )
    }
}
export default SignIn;