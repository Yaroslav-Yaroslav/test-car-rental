import {
  AccentTitle,
  CardTitle,
  Img,
  ImgThumb,
  InfoList,
  InfoText,
  SecondadyList,
} from 'components/CarItem/CarItem.styled';
import { ModalContainer } from './CarDetails.styled';

const CarDetails = ({ car }) => {
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
    <ModalContainer>
      <ImgThumb>
        <Img src={img} alt={`${make} ${model}`} />
      </ImgThumb>
      <CardTitle>
        <p>
          {make} <AccentTitle>{model}</AccentTitle>, {year}
        </p>
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
    </ModalContainer>
  );
};
export default CarDetails;
