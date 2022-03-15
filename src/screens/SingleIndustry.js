import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

function SingleIndustry() {
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  // https://www.worldatlas.com/articles/top-coffee-producing-countries.html
  const statuses = [
    {
      id: 1,
      title: 'legal',
      slug: '',
      color: 'red',
      countries: ['EGY', 'BRA', 'USA'],
    },
    {
      id: 2,
      title: 'illegal',
      slug: '',
      color: 'green',
      countries: ['PAK', 'IND', 'SAU'],
    },
    {
      id: 3,
      title: 'test',
      slug: '',
      color: 'blue',
      countries: ['AGO', 'COD', 'CAF'],
    },
  ];

  return (
    <div className='container mt-4'>
      <h2 className='text-start'>Cryptocurrency public map</h2>
      <div className='row'>
        <div className='col-8 col-md-8 col-sm-8 grid-item'>
          <ComposableMap projection='geoEqualEarth'>
            <Geographies geography={geoUrl} stroke='#FFF' strokeWidth={0.5}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const state = statuses.find(
                    (it) =>
                      it &&
                      it.countries &&
                      it.countries.includes(geo.properties.ISO_A3)
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={(state && state.color) || '#DDDDDD'}
                      onClick={() => console.log(geo.properties.ISO_A3)}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
        <div className='col-4 col-md-4 col-sm-4 d-grid'>
          <div className='mb-3 grid-item'>Level 2: .col-8 .col-sm-6</div>
          <div className='grid-item p-2'>Level 2: .col-4 .col-sm-6</div>
        </div>
      </div>
    </div>
  );
}

export default SingleIndustry;
