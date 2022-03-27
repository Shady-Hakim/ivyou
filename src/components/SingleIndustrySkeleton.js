import React from 'react';

function SingleIndustrySkeleton() {
  return (
    <div className='container mt-4'>
      <h2 className='text-start placeholder-glow'>
        <span className='placeholder col-6' />
      </h2>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <div className='col col-md-8 col-sm-8'>
          <div className='mb-3 grid-item p-2 placeholder-glow'>
            <span className='placeholder col-12 p-5'>
              <span className='placeholder col-12 p-5' />
              <span className='placeholder col-12 p-5' />
              <span className='placeholder col-12 p-5' />
            </span>
          </div>
          <div className='grid-item p-2 placeholder-glow'>
            <span className='placeholder col-8' />
          </div>
        </div>
        <div className='col col-md-4 col-sm-4 d-grid'>
          <div className='mb-3 grid-item p-2 placeholder-glow'>
            <span className='placeholder col-12 p-5'>
              <span className='placeholder col-12 p-5' />
            </span>
          </div>
          <div className='mb-3 grid-item p-2 placeholder-glow'>
            <span className='placeholder col-7' />
            <span className='placeholder col-4' />
            <span className='placeholder col-4' />
            <span className='placeholder col-6' />
            <span className='placeholder col-8' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleIndustrySkeleton;
