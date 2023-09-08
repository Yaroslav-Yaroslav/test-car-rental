import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  width: 100%;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1224px) {
    max-width: 1224px;
  }
`;
export const StyledHeader = styled.header`
  padding: 20px 0;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.14),
    0px 4px 1px rgba(0, 0, 0, 0.2);
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;
export const LogoLink = styled(Link)`
  font-size: 26px;
  font-weight: 700;
  color: #121417;
`;
export const LogoText = styled.span`
  color: #3470ff;
`;
export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #121417;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #3470ff;
  }
  &.active {
    color: #3470ff;
  }
`;
export const TitleText = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #3470ff;
  text-align: justify;
  margin-top: 50px;
`;