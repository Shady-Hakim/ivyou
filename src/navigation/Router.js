import React, { Routes, Route } from 'react-router-dom';
import AboutUs from '../screens/AboutUs';
import AddIndustry from '../screens/AddIndustry';
import AddSource from '../screens/AddSource';
import MatchingScreen from '../screens/Matching';
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
      <Route
        path='industries/:industrySlug/add-source'
        element={<AddSource />}
      />
      <Route path='private-map' element={<PrivateMap />} />
      <Route path='matching' element={<MatchingScreen />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='*' element={<AboutUs />} />
    </Routes>
  );
}
export default Router;
