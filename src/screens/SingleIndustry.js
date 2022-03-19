import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import CategoriesNav from '../components/CategoriesNav';
import Statuses from '../components/Statuses';
import SingleIndustrySkeleton from '../components/SingleIndustrySkeleton';

function SingleIndustry() {
  const params = useParams();
  const { industrySlug } = params;
  const [data, setData] = useState([]);
  const { title, categories } = data;
  const [activeCategory, setActiveCategory] = useState();
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const uri = process.env.REACT_APP_BASE_URL;
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  const categoryButtonHandler = (selectedCategory) => {
    const categoryById = categories.find(
      (category) => category.id === selectedCategory.id
    );
    setStatuses(categoryById.statuses);
    setActiveCategory(selectedCategory);
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
          setLoading(false);
          // console.log(response);
        })
        .catch((err) => {
          console.log(err);
        }),
    [uri, industrySlug]
  );
  if (loading) {
    return <SingleIndustrySkeleton />;
  }
  return (
    <div className='container mt-4'>
      <h2 className='text-start'>{title} public map</h2>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <div className='col col-md-8 col-sm-8 grid-item position-relative'>
          <CategoriesNav
            categories={categories}
            categoryButtonHandler={categoryButtonHandler}
            activeCategory={activeCategory}
          />
          <ComposableMap projection='geoEqualEarth'>
            <ZoomableGroup zoom={1}>
              <Geographies geography={geoUrl} stroke='#FFF' strokeWidth={0.5}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const status = statuses.find(
                      (status) =>
                        status &&
                        status.countries &&
                        status.countries.includes(geo.properties.ISO_A3)
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
            </ZoomableGroup>
          </ComposableMap>
          <Statuses statuses={statuses} />
        </div>
        <div className='col col-md-4 col-sm-4 d-grid'>
          <div className='mb-3 grid-item p-2'>Video</div>
          <div className='mb-3 grid-item p-2'>News</div>
          <div className='grid-item p-2'>Sources</div>
        </div>
      </div>
    </div>
  );
}

export default SingleIndustry;
