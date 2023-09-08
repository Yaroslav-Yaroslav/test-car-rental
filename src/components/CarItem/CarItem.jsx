import {
  Card,
  CardTitle,
  Img,
  ImgThumb,
  AccentTitle,
  InfoList,
  InfoText,
  LearnMoreBtn,
  SecondadyList,
  FavoriteBtn,
  HeartSvg,
} from './CarItem.styled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import CarDetails from 'components/CarDetails/CarDetails';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addFavorite, removeFavorite } from 'redux/slice';
const CarItem = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = car;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(favorite => favorite.id === id);
  console.log("isFavorite:", isFavorite)

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const city = address.split(', ')[1];
  const country = address.split(', ')[2];
  return (
    <>
      <Card>
        <ImgThumb>
          <Img src={img} alt={`${make} ${model}`} />
          <FavoriteBtn
            type="button"
            aria-label="Add to favorite"
            onClick={handleClick}
          >
            <HeartSvg
              style={isFavorite ? { stroke: '#0B44CD', fill: '#0B44CD' } : {}}
            >
              <use href={`${sprite}#icon-heard-normal`} />
            </HeartSvg>
          </FavoriteBtn>
        </ImgThumb>
        <CardTitle>
          <p>
            {make} <AccentTitle>{model}</AccentTitle>, {year}
          </p>
          <p>{rentalPrice}</p>
        </CardTitle>
        <InfoList>
          <InfoText>{city}</InfoText>
          <InfoText>{country}</InfoText>
          <InfoText>{rentalCompany}</InfoText>
        </InfoList>
        <SecondadyList>
          <InfoText>{type}</InfoText>
          <InfoText>{model}</InfoText>
          <InfoText>{id}</InfoText>
          <InfoText>{functionalities[0]}</InfoText>
        </SecondadyList>
        <LearnMoreBtn type="button" onClick={toggleModal}>
          Learn more
        </LearnMoreBtn>
      </Card>
      {showModal && (
        <Modal onClose={toggleModal} showModal={showModal}>
          <CarDetails car={car} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
export default CarItem;
