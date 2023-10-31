import styled from 'styled-components';
import heroImg from '../../images/hero(1).jpg';
export const Overlay = styled.section`
  max-width: 1600px;
  height: 600px;
  margin: 0 auto;
  background-color: #c4c4c4;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${heroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
