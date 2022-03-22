import React from 'react';

function HomeSceleton() {
  return (
    <div className='container-fluid'>
      <section className='hero-skeleton d-flex justify-content-center align-items-center'>
        <div className='overlay'>
          <div
            className='container position-relative aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-delay='100'
          >
            <h1 className='placeholder-glow'>
              <span className='placeholder col-6' />
            </h1>
            <h2 className=' placeholder-glow'>
              <span className='placeholder col-6' />
            </h2>
          </div>
        </div>
      </section>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {[1, 2, 3].map((idx) => (
          <div key={idx} className='col'>
            <div className='card' aria-hidden='true'>
              <div className='card-body'>
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
                  className='btn btn-primary disabled placeholder col-6'
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
