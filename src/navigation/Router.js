import React, { Routes, Route } from 'react-router-dom';
import AboutUs from '../screens/AboutUs';
import Articles from '../screens/Articles';
import PrivateMap from '../screens/PrivateMap';
import PublicMap from '../screens/PublicMap';
import SingleIndustry from '../screens/SingleIndustry';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<PublicMap />} />
      <Route path='industries'>
        <Route path=':industrySlug' element={<SingleIndustry />} />
      </Route>
      <Route path='private-map' element={<PrivateMap />} />
      <Route path='articles' element={<Articles />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='*' element={<AboutUs />} />
    </Routes>
  );
}
export default Router;
