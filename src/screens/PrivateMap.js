import React from 'react';

function PrivateMap() {
  return (
    <div className='container-fluid'>
      <section className='hero d-flex justify-content-center align-items-center mt-5'>
        <div className='container position-relative'>
          <div className='row text-white border-top border-bottom border-1 border-light p-3'>
            <h1 className='col-8'>Private organization data</h1>
            <button
              type='button'
              className='col-4 btn btn-secondary border border-1 border-light'
            >
              Learn more
            </button>
          </div>
          <div className='text-start text-white'>
            <h3 className='mt-5 mb-3'>VIEW PUBLIC SHARED DATA</h3>
            <p>
              This tab all is required is to import the current map of worldwide
              crypto mapping, and then when we have more maps we will need to
              sort it out more by hyperlinks or topic. This tab should have a
              view and the updates of that view on one space.
            </p>
          </div>
          <button
            type='button'
            className='btn btn-success border border-1 border-light'
          >
            Learn more
          </button>
        </div>
      </section>
    </div>
  );
}

export default PrivateMap;
