import { Container, TitleText } from 'components/Header/Header.styled';
import Hero from 'components/Hero/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <TitleText>
          Car rental services offer a convenient and flexible way to travel.
          With a wide range of vehicles to choose from, you can find the perfect
          car to suit your needs, whether you’re going on a road trip, need a
          car for business, or just want to explore a new city. Renting a car
          gives you the freedom to go where you want, when you want, without
          having to rely on public transportation or expensive taxis
        </TitleText>
      </Container>
    </>
  );
};
export default Home;
