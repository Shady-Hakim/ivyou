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
            <p className='text-white mt-5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
