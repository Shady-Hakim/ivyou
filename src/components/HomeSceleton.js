import React from 'react';

function HomeSceleton() {
  return (
    <div className='container pt-5'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {[1, 2, 3].map((idx) => (
          <div key={idx} className='col'>
            <div className='card' aria-hidden='true'>
              <div className='card-body'>
                <div className='mb-3 grid-item p-2 placeholder-glow'>
                  <span className='placeholder col-12 p-5'>
                    <span className='placeholder col-12 p-5' />
                  </span>
                </div>
                <h5 className='card-title placeholder-glow'>
                  <span className='placeholder col-6' />
                </h5>
                <p className='card-text placeholder-glow'>
                  <span className='placeholder col-7' />
                  <span className='placeholder col-4' />
                  <span className='placeholder col-4' />
                  <span className='placeholder col-6' />
                  <span className='placeholder col-8' />
                </p>
                <div
                  className='btn btn-secondary disabled placeholder col-3'
                  role='button'
                  aria-label='button'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeSceleton;
