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
} from './CarItem.styled';

const CarItem = ({ car }) => {
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
    <Card>
      <ImgThumb>
        <Img src={img} alt={`${make} ${model}`} />
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
      <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
    </Card>
  );
};
export default CarItem;
