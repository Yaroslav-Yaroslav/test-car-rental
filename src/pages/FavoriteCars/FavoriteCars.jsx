
import FavoritesCarList from 'components/FavoritesCarList/FavoritesCarList';
import { Container } from 'components/Header/Header.styled';
import Loader from 'components/Loader/Loader';
import {  useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

const FavoriteCars = () => {
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Container>
      {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
      <FavoritesCarList />
    </Container>
  );
};
export default FavoriteCars;
