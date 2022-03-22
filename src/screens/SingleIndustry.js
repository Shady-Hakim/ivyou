import React, { useEffect, useState } from 'react';
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
import NewsComponent from '../components/NewsComponent';

function SingleIndustry() {
  const params = useParams();
  const { industrySlug } = params;
  const [data, setData] = useState([]);
  const { title, categories } = data;
  const [activeCategory, setActiveCategory] = useState();
  const [statuses, setStatuses] = useState([]);
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  // const [keyword, setKeyword] = useState('');
  const uri = process.env.REACT_APP_BASE_URL;

  const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  const categoryButtonHandler = (selectedCategory) => {
    const categoryById = categories.find(
      (category) => category.id === selectedCategory.id,
    );
    setStatuses(categoryById.statuses);
    setActiveCategory(selectedCategory);
  };

  const fetchNews = (keyword) => {
    const newsUri = 'https://newsapi.org/v2/everything?'
      + `q=${keyword}&`
      + 'sortBy=popularity&'
      + 'apiKey=292cb1867b2c4e06ba65366dee75cb60';

    axios({
      method: 'get',
      url: newsUri,
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => {
      // handle success
      setNews(response.data.articles);
      setLoading(false);
    });
  };
  useEffect(
    () => axios({
      method: 'get',
      url: `${uri}/industry/show/${industrySlug}`,
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => {
      // handle success
      setData(response.data);
      setLoading(false);
      // console.log(response);
    }),
    [uri, industrySlug],
  );

  if (loading) {
    return <SingleIndustrySkeleton />;
  }
  return (
    <div className='container mt-4'>
      <h2 className='text-start'>
        {title}
        {' '}
        public map
      </h2>
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
                {({ geographies }) => geographies.map((geo) => {
                  const status = statuses.find(
                    (item) => item
                        && item.countries
                        && item.countries.includes(geo.properties.ISO_A3),
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={(status && status.color) || '#DDDDDD'}
                      onClick={() => activeCategory
                          && fetchNews(
                            `${activeCategory.name}+${title}+in+${geo.properties.NAME}`,
                          )}
                    />
                  );
                })}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
          <Statuses statuses={statuses} />
        </div>
        <div className='col col-md-4 col-sm-4 d-grid'>
          <div className='mb-3 grid-item p-2'>Video</div>
          <div className='news-outside mb-3 grid-item'>
            <NewsComponent news={news} />
          </div>
          <div className='grid-item p-2'>Sources</div>
        </div>
      </div>
    </div>
  );
}

export default SingleIndustry;
