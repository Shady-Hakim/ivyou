import React from 'react';
import './App.scss';
import Navbar from './navigation/Navbar';
import Router from './navigation/Router';
import Footer from './navigation/Footer';

function App() {
  return (
    <div className='App bg-secondary'>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
