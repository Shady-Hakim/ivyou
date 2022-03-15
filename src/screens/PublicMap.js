import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PublicMap() {
  const [data, setData] = useState([]);
  const uri = process.env.REACT_APP_BASE_URL;
  //   const data = [
  //     {
  //       id: 1,
  //       title: 'crypto',
  //       image: 'https://via.placeholder.com/350x150',
  //     },
  //     {
  //       id: 2,
  //       title: 'crypto1',
  //       image: 'https://via.placeholder.com/350x150',
  //     },
  //     {
  //       id: 3,
  //       title: 'crypto2',
  //       image: 'https://via.placeholder.com/350x150',
  //     },
  //     {
  //       id: 4,
  //       title: 'crypto3',
  //       image: 'https://via.placeholder.com/350x150',
  //     },
  //     {
  //       id: 5,
  //       title: 'crypto4',
  //       image: 'https://via.placeholder.com/350x150',
  //     },
  //   ];
  useEffect(
    () =>
      axios({
        method: 'get',
        url: `${uri}/industry`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        },
      })
        .then((response) => {
          // handle success
          setData(response.data);
          //   console.log(response);
        })
        .catch((err) => {
          console.log(err);
        }),
    [uri]
  );
  return (
    <div className='container-fluid'>
      <section
        id='hero'
        className='d-flex justify-content-center align-items-center'
      >
        <div className='overlay'>
          <div
            className='container position-relative aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-delay='100'
          >
            <h1 className='text-white'>1vyou</h1>
            <h2 className='text-white'>Public View</h2>
          </div>
        </div>
      </section>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {data &&
          data.map((industry) => (
            <div key={industry.id} className='col'>
              <div className='card'>
                <img
                  className='card-img-top'
                  alt={industry.title}
                  src={industry.image}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{industry.title}</h5>
                  <p className='card-text'>{industry.description}</p>
                  <Link
                    className='btn btn-primary'
                    to={`/industries/${industry.slug}`}
                    role='button'
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PublicMap;
