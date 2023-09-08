import CarItem from 'components/CarItem/CarItem';
import { Catalog } from 'components/CarsList/CarsList.styled';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';

const FavoritesCarList = () => {
  const cars = useSelector(selectFavorites);
  return (
    <Catalog>
      {cars.map((car, index) => (
        <CarItem key={index} car={car} />
      ))}
    </Catalog>
  );
};
export default FavoritesCarList;
