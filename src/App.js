import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header/header';
import HomePage from './components/homepage/homepage';
import Kochi from './components/locations/kochi';
import Hyderabad from './components/locations/hyderabad';
import {Route,Switch,Redirect} from 'react-router-dom';
import Bangalore from './components/locations/bangalore';
import SignInAndSignUpPage from './components/signin-and-signup/siginandsignup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './components/redux-user/user.actions';

class App extends React.Component {

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

render(){


  return (
    <div>
     <Header />
     <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/kochi' component={Kochi}/>
    <Route path='/bangalore' component={Bangalore}/>
    <Route path='/hyderabad' component={Hyderabad}/>
    <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
     </Switch>
    </div>
     );
    }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


