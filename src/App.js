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
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
