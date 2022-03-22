import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './navigation/Navbar';
import Router from './navigation/Router';
import Footer from './navigation/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
