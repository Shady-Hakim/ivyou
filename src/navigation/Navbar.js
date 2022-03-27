import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          1vyou
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/industries'>
                1VYou Public
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/private-map'>
                1vyou Private
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/articles'>
                Matching
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about-us'>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
