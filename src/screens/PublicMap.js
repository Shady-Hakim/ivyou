function PublicMap() {
  const data = [
    {
      id: 1,
      title: 'crypto',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      id: 2,
      title: 'crypto1',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      id: 3,
      title: 'crypto2',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      id: 4,
      title: 'crypto3',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      id: 5,
      title: 'crypto4',
      image: 'https://via.placeholder.com/350x150',
    },
  ];
  return (
    <div className='container'>
      <h2 className='text-center'>Public View</h2>
      <div className='row d-flex justify-content-center'>
        {data.map((industry) => (
          <div key={industry.id} className='col-md-4 mb-3'>
            <img className='img-fluid' src={industry.image} />
            <h4 className='text-center'>{industry.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PublicMap;
