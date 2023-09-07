import CarItem from 'components/CarItem/CarItem';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';

const CarsList = () => {
  const cars = useSelector(selectCars);
  return (
    <ul>
      {cars.map((car, index) => (
        <CarItem key={index} car={car} />
      ))}
    </ul>
  );
};
export default CarsList;
