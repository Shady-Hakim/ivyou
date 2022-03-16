import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import CategoriesNav from '../components/CategoriesNav';

function SingleIndustry() {
  const params = useParams();
  const { industrySlug } = params;
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState();
  const [statuses, setStatuses] = useState([]);
  const uri = process.env.REACT_APP_BASE_URL;
  const categories =
    data && data.categories && data.categories.map((category) => category);
  console.log(data);
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  // const statuses1 = [
  //   {
  //     id: 1,
  //     title: 'legal',
  //     slug: '',
  //     color: 'red',
  //     countries: ['EGY', 'BRA', 'USA'],
  //   },
  //   {
  //     id: 2,
  //     title: 'illegal',
  //     slug: '',
  //     color: 'green',
  //     countries: ['PAK', 'IND', 'SAU'],
  //   },
  //   {
  //     id: 3,
  //     title: 'test',
  //     slug: '',
  //     color: 'blue',
  //     countries: ['AGO', 'COD', 'CAF'],
  //   },
  // ];

  const categoryButtonHandler = (id) => {
    console.log('here');
    const categoryById = categories.find((category) => category.id === id);
    setStatuses(categoryById.statuses);
    setActiveId(id);
    console.log('statuses', categoryById.statuses);
  };
  useEffect(
    () =>
      axios({
        method: 'get',
        url: `${uri}/industry/show/${industrySlug}`,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          // handle success
          setData(response.data);
          // console.log(response);
        })
        .catch((err) => {
          console.log(err);
        }),
    [uri, industrySlug]
  );
  return (
    <div className='container mt-4'>
      <h2 className='text-start'>Cryptocurrency public map</h2>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <div className='col col-md-8 col-sm-8 grid-item'>
          <ComposableMap projection='geoEqualEarth'>
            <Geographies geography={geoUrl} stroke='#FFF' strokeWidth={0.5}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const status = statuses.find(
                    (status) =>
                      status &&
                      status.country &&
                      status.country.includes(geo.properties.ISO_A3)
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={(status && status.color) || '#DDDDDD'}
                      onClick={() => console.log(geo.properties.ISO_A3)}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
          <CategoriesNav
            categories={categories}
            categoryButtonHandler={categoryButtonHandler}
            activeId={activeId}
          />
        </div>
        <div className='col col-md-4 col-sm-4 d-grid'>
          <div className='mb-3 grid-item'>Level 2: .col-8 .col-sm-6</div>
          <div className='grid-item p-2'>Level 2: .col-4 .col-sm-6</div>
        </div>
      </div>
    </div>
  );
}

export default SingleIndustry;
