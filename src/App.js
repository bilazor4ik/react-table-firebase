import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddDeliveryForm from './components/addDeliveryFrom';

class App extends Component {
  render() {
    return (
      <div>
        <AddDeliveryForm></AddDeliveryForm>
      </div>
    );
  }
}

export default App;