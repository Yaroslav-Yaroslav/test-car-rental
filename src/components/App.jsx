import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
const Home = lazy(() => import('../pages/Home/Home'));
const CarPark = lazy(() => import('../pages/CarPark/CarPark'));
const FavoriteCars = lazy(() => import('../pages/FavoriteCars/FavoriteCars'));

const App = () => {
  return (<Routes>
    <Route path='/' element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/carpark" element={<CarPark />} />
      <Route path="/favorite" element={<FavoriteCars />} />
    </Route>
  </Routes>)
};

export default App;
