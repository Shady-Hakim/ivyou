function SingleIndustrySkeleton() {
  return (
    <div className='container mt-4'>
      <h2 className='text-start placeholder-glow'>
        <span class='placeholder col-6'></span>
      </h2>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <div className='col col-md-8 col-sm-8 grid-item position-relative'>
          <div className='mb-3 grid-item p-2 placeholder-glow'>
            <span class='placeholder col-12 p-5'>
              <span class='placeholder col-12 p-5'></span>
              <span class='placeholder col-12 p-5'></span>
              <span class='placeholder col-12 p-5'></span>
            </span>
          </div>
        </div>
        <div className='col col-md-4 col-sm-4 d-grid'>
          <div className='mb-3 grid-item p-2 placeholder-glow'>
            <span class='placeholder col-12 p-5'>
              <span class='placeholder col-12 p-5'></span>
            </span>
          </div>
          <div className='mb-3 grid-item p-2 placeholder-glow'>
            <span class='placeholder col-7'></span>
            <span class='placeholder col-4'></span>
            <span class='placeholder col-4'></span>
            <span class='placeholder col-6'></span>
            <span class='placeholder col-8'></span>
          </div>
          <div className='grid-item p-2 placeholder-glow'>
            <span class='placeholder col-8'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleIndustrySkeleton;
