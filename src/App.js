import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';


class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscirbeFromAuth = null;

  componentDidMount() {
    this.unsubscirbeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await  createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, ()=> {console.log(this.state);})
        })
      }
      this.setState({currentUser: userAuth});
    })
  }

  componentWillUnmount() {
    this.unsubscirbeFromAuth();
  }



  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
  
}

export default App;
