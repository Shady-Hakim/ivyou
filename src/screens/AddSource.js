import React from 'react';
import { Formik, Form } from 'formik';

function AddSource() {
  return (
    <div className='container text-start p-5'>
      <div className='col-4 offset-4'>
        <Formik
          initialValues={{
            mapTitle: '',
            source: '',
            sourceTitle: '',
            numberOfDataFields: '',
            keys: '',
          }}
          onSubmit={({ setSubmitting }) => {
            setSubmitting(true);
          }}
        >
          <Form>
            <div className='mb-3'>
              <label htmlFor='source' className='form-label w-100'>
                Source
                <input name='source' type='text' className='form-control' />
              </label>
            </div>

            <div className='mb-3'>
              <label htmlFor='sourceTitle' className='form-label w-100'>
                Source Title
                <input
                  name='sourceTitle'
                  type='text'
                  className='form-control'
                />
              </label>
            </div>

            <div className='mb-3'>
              <label htmlFor='keys' className='form-label w-100'>
                Keys
                <input name='keys' type='text' className='form-control' />
              </label>
            </div>

            <button
              type='button'
              className='btn btn-success'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Thank you!
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body'>
              We received your data, a new map will be created shortly.
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSource;
