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
const CarItem = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = car;
  const city = address.split(', ')[1];
  const country = address.split(', ')[2];
  return (
    <>
      <Card>
        <ImgThumb>
          <Img src={img} alt={`${make} ${model}`} />
          <FavoriteBtn type="button" aria-label="Add to favorite">
            <HeartSvg>
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
          <CarDetails car={car} />
        </Modal>
      )}
    </>
  );
};
export default CarItem;
