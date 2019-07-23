import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import SignIn from './pages/user/SignIn';
import SignUp from './pages/user/SignUp';

const App = () => (
  <div className="container">
    <h1><a href="/">E-commerce Shopping Cart Application</a></h1>
    <a className="col-sm-5" href="/signin">Sign In</a>
    <a className="col-sm-1" href="/signup">Sign Up</a>
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </div>
);

const mapStateToProps = (state) => ({
  userConnected: state.user,
});

export default connect(mapStateToProps)(App);
