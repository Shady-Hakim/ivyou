import React from 'react';

function HomeScreen() {
  return (
    <div className='container-fluid f-w'>
      <section className='hero hero-bg d-flex justify-content-center align-items-center'>
        <div className='overlay'>
          <div className='container position-relative'>
            <h1 className='text-white border-top border-bottom border-1 border-light w-50 d-inline p-3'>
              1vyou
            </h1>
            <p className='text-white mt-5 fs-3'>
              <q>
                One view that binds them all, One view that organizes them...
                powered by a Data Analytics Team and A.I. Engine
              </q>
            </p>
            <button type='button' className='btn btn-success'>
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
