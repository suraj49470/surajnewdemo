import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
                 <div>
                      <Header/>
                      <Container/>
                      
                 </div>
    );
  }
}

export default App;
