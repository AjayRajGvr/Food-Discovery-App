import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import HomePage from './components/homepage/homepage';
import Kochi from './components/locations/kochi';
import Hyderabad from './components/locations/hyderabad';
import {Route} from 'react-router-dom';
import Bangalore from './components/locations/bangalore';
import SignInAndSignUP from './components/signin/siginandsignup';

function App() {
  return (
    <div>
     <Header />
    <Route exact path='/' component={HomePage} />
    <Route path='/kochi' component={Kochi}/>
    <Route path='/bangalore' component={Bangalore}/>
    <Route path='/hyderabad' component={Hyderabad}/>
    <Route path='/signin' component={SignInAndSignUP}/>

    </div>
    
  );
}

export default App;
