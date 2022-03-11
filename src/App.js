import logo from './logo.svg';
import './App.css';
import Navbar from './navigation/Navbar';
import PublicMap from './screens/PublicMap';
import Router from './navigation/Router';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router />
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
