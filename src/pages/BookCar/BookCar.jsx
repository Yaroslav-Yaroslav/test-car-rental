import CarsList from 'components/CarsList/CarsList';
import { Container } from 'components/Header/Header.styled';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

const BookCar = () => {
  const [page, setPage] = useState(1);
  const onClickBtn = () => setPage(prevPage => prevPage + 1);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
      <CarsList />
      {32 / 8 > page && !isLoading && <LoadMoreBtn onClick={onClickBtn} />}
    </Container>
  );
};
export default BookCar;
