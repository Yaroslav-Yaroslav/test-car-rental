import {
  AccentTitle,
  CardTitle,
  ImgThumb,
  InfoList,
  InfoText,
  SecondadyList,
} from 'components/CarItem/CarItem.styled';
import {
  ModalContainer,
  Img,
  Description,
  TextTitle,
  TextInfo,
  AccentTextInfo,
  RentalConditionsList,
  RentalLink,
  CloseBtn,
  CloseSvg,
} from './CarDetails.styled';
import sprite from '../../images/sprite.svg'
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
    address,
    rentalConditions,
    mileage,
  } = car;
  const city = address.split(', ')[1];
  const country = address.split(', ')[2];
  const carConditions = rentalConditions.split('\n');
  const ageCarConditions = carConditions[0].split(': ');
  return (
    <ModalContainer>
      <CloseBtn type="button">
        <CloseSvg>
          <use href={`${sprite}#icon-x-close`} />
        </CloseSvg>
      </CloseBtn>
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
        <InfoText>Id: {id}</InfoText>
        <InfoText>Year: {year}</InfoText>
        <InfoText>Type: {type}</InfoText>
      </InfoList>
      <SecondadyList>
        <InfoText>Fuel Consumption: {fuelConsumption}</InfoText>
        <InfoText>Engine Size: {engineSize}</InfoText>
      </SecondadyList>
      <Description>{description}</Description>
      <TextTitle>Accessories and functionalities:</TextTitle>
      <InfoList>
        {accessories.map((item, index) => (
          <InfoText key={index}>{item}</InfoText>
        ))}
      </InfoList>
      <SecondadyList>
        {functionalities.map((item, index) => (
          <InfoText key={index}>{item}</InfoText>
        ))}
      </SecondadyList>
      <TextTitle>Rental Conditions:</TextTitle>
      <RentalConditionsList>
        <TextInfo>
          {ageCarConditions[0]}:{' '}
          <AccentTextInfo>{ageCarConditions[1]}</AccentTextInfo>
        </TextInfo>
        {carConditions.slice(1).map((item, index) => (
          <TextInfo key={index}>{item}</TextInfo>
        ))}
        <TextInfo>
          Mileage: <AccentTextInfo>{mileage}</AccentTextInfo>
        </TextInfo>
        <TextInfo>
          Price: <AccentTextInfo>{rentalPrice}</AccentTextInfo>
        </TextInfo>
      </RentalConditionsList>
      <RentalLink href="tel:+380730000000">Rental car</RentalLink>
    </ModalContainer>
  );
};
export default CarDetails;
