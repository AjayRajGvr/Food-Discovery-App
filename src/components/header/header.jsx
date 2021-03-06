import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';


const Header = ( { currentUser }) => (
    <div className='header'>
     <Link className='header-content' to='/'>
         <Logo className='logo'/>
     </Link>

     <div className='header-content'>
     {currentUser ? (
        <div className='header-right' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='header-right' to='/signin'>
          SIGN IN
        </Link>
      )}
     </div>

    </div>
);
const mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser
  });
  
export default connect(mapStateToProps)(Header);