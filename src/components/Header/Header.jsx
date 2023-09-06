const {
  StyledHeader,
  Container,
  HeaderWrapper,
  LogoLink,
  StyledLink,
  Nav,
  LogoText,
} = require('./Header.styled');

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoLink to="/">
            <LogoText>GO</LogoText>CAR
          </LogoLink>
          <Nav>
            <StyledLink to="/catalog">Book a car</StyledLink>
            <StyledLink to="/favorites">Favorite cars</StyledLink>
          </Nav>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
