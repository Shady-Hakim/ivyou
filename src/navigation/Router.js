import { Routes, Route } from 'react-router-dom';
import PrivateMap from '../screens/PrivateMap';
import PublicMap from '../screens/PublicMap';
function Router() {
  return (
    <Routes>
      <Route path='/' element={<PublicMap />} />
      <Route path='/privatemap' element={<PrivateMap />} />
    </Routes>
  );
}
export default Router;
