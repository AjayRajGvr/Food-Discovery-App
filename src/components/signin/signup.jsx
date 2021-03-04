import React from 'react';

class SignUp extends React.Component{

    constructor()
    {
        super();
    }

    render(){
        return(
            
            <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' >
              <input
                type='text'
                name='displayName'
                label='Display Name'
                required
                placeholder="Enter your Name"
              /><br/>
              <input
                type='email'
                name='email'
                label='Email'
                required
                placeholder="Enter your Email"
              /><br/>
              <input
                type='password'
                name='password'
                label='Password'
                required
                placeholder="Enter your Password"
              /><br/>
              <input
                type='password'
                name='confirmPassword'
                label='Confirm Password'
                required
                placeholder="Enter your Password Again"
              />
              <button type='submit'>SIGN UP</button>
            </form>
          </div>



        )
    }
}
export default SignUp;