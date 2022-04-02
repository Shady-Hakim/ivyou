import React from 'react';

function MatchingScreen() {
  return (
    <div className='matching container mt-5'>
      <div className='row'>
        <div className='col'>
          <h2 className='text-light'>PUBLIC MAPS</h2>
          <h3 className='border border-light border-4 p-5 text-light'>
            INTERACTIVE Real-Time/Live Maps
          </h3>
          <p className='text-light fs-1'>1</p>
        </div>
        <div className='col p-5 m-2'>
          <i className='bi bi-arrow-left-right grid-icon text-white' />
        </div>
        <div className='col'>
          <h2 className='text-light'>PRIVATE MAPS</h2>
          <div className='border border-light border-4 p-5'>
            <i className='bi bi-grid-3x3 grid-icon text-white' />
          </div>
          <p className='text-light fs-1'>2</p>
        </div>
      </div>
      <div className='col p-5 m-2'>
        <i className='bi bi-lightning-fill grid-icon text-white' />
      </div>
      <div className='row justify-content-center'>
        <div className='col-lg-4'>
          <h2 className='text-light'>GAP ANALYSIS</h2>

          <div className='border border-light border-4 p-5'>
            <h3 className='text-light'>Report</h3>
            <i className='bi bi-list-columns-reverse grid-icon text-white' />
          </div>
          <p className='text-light fs-1'>3</p>
        </div>
      </div>
    </div>
  );
}

export default MatchingScreen;
