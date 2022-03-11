import { Routes, Route } from 'react-router-dom';
import AboutUs from '../screens/AboutUs';
import Articles from '../screens/Articles';
import PrivateMap from '../screens/PrivateMap';
import PublicMap from '../screens/PublicMap';
function Router() {
  return (
    <Routes>
      <Route path='/' element={<PublicMap />} />
      <Route path='/privatemap' element={<PrivateMap />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/about-us' element={<AboutUs />} />
    </Routes>
  );
}
export default Router;
