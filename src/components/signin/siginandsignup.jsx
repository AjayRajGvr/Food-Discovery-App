import React from 'react';
import SignIn from './signin';
import SignUp from './signup';
import './sign.styles.css';


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
  
  export default SignInAndSignUpPage;
  