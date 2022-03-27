import React from 'react';
import { Formik, Form } from 'formik';

function AddIndustry() {
  return (
    <div className='container text-start p-5'>
      <div className='col-4 offset-4'>
        <Formik
          initialValues={{
            source: '',
            industry: '',
            numberOfDataFields: '',
            dataFieldNames: '',
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
              <label htmlFor='industry' className='form-label w-100'>
                Industry
                <input name='industry' type='text' className='form-control' />
              </label>
            </div>

            <div className='mb-3'>
              <label htmlFor='numberOfDataFields' className='form-label w-100'>
                Number Of Data Fields
                <input
                  name='numberOfDataFields'
                  type='number'
                  className='form-control'
                />
              </label>
            </div>

            <div className='mb-3'>
              <label htmlFor='dataFieldNames' className='form-label w-100'>
                Data Field Names
                <input
                  name='dataFieldNames'
                  type='text'
                  className='form-control'
                />
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

export default AddIndustry;
