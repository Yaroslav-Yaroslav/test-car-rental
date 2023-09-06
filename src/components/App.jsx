import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
const Home = lazy(() => import('../pages/Home/Home'));
const BookCar = lazy(() => import('../pages/BookCar/BookCar'));
const FavoriteCars = lazy(() => import('../pages/FavoriteCars/FavoriteCars'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<BookCar />} />
        <Route path="/favorites" element={<FavoriteCars />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
