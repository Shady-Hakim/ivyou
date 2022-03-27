import React from 'react';

function PrivateMap() {
  return (
    <div className='container-fluid'>
      <section className='hero d-flex justify-content-center align-items-center'>
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
          <p className='text-white mt-5'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
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
