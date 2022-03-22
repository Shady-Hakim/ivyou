import React from 'react-router-dom';

function Footer() {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div className='col d-flex align-items-center'>
          <span className='text-muted'>
            © 2022 1vyou | Developed by
            {' '}
            <a href='https://ilampagency.com'>iLamp</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
