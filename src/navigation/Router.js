import React, { Routes, Route } from 'react-router-dom';
import AboutUs from '../screens/AboutUs';
import AddIndustry from '../screens/AddIndustry';
import Articles from '../screens/Articles';
import HomeScreen from '../screens/Home';
import PrivateMap from '../screens/PrivateMap';
import PublicMap from '../screens/PublicMap';
import SingleIndustry from '../screens/SingleIndustry';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='industries' element={<PublicMap />} />
      <Route path='industries/add-industry' element={<AddIndustry />} />
      <Route path='industries/:industrySlug' element={<SingleIndustry />} />
      <Route path='private-map' element={<PrivateMap />} />
      <Route path='articles' element={<Articles />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='*' element={<AboutUs />} />
    </Routes>
  );
}
export default Router;
