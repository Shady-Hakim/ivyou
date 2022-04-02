import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HomeSceleton from '../components/HomeSceleton';

function PublicMap() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const uri = process.env.REACT_APP_BASE_URL;

  useEffect(
    () => axios({
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
    }).then((response) => {
      // handle success
      setData(response.data);
      setLoading(false);
      //   console.log(response);
    }),
    [uri],
  );
  if (loading) {
    return <HomeSceleton />;
  }
  return (
    <div className='public-map container mt-5'>
      <div className='row row-cols-md-3'>
        {data
          && data.map((industry) => (
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
                    className='btn btn-secondary'
                    to={`/industries/${industry.slug}`}
                    role='button'
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        <a
          href='/industries/add-industry'
          className='border border-light border-1 align-self-center p-5'
        >
          <i className='bi bi-plus plus-icon text-white' />
        </a>
      </div>
    </div>
  );
}

export default PublicMap;
