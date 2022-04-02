import React from 'react';

function AboutUs() {
  return (
    <div className='container-fluid'>
      <section className='hero d-flex justify-content-center align-items-center'>
        <div className='container position-relative text-white'>
          <div className='row border-top border-bottom border-1 border-light p-3'>
            <h1 className='col'>About us</h1>
          </div>
          <div>
            <p className='mt-5 fs-3'>
              <q>
                One view that binds them all, One view that organizes them...
                powered by a Data Analytics Team and A.I. Engine
              </q>
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

export default AboutUs;
