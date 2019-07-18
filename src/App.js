import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './store';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      filteredProducts: [],
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Route path="/" component={Home} />
      </Provider>
    );
  }
}

export default App;
