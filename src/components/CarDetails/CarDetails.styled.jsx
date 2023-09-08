import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 541px;
  border-radius: 24px;
  background: #fff;
  padding: 40px;

  display: flex;
  flex-direction: column;
`;
export const Img = styled.img`
  object-fit: cover;
  border-radius: 15px;
`;
export const Description = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 1.43;

  margin-top: 14px;
`;
export const TextTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  margin-top: 24px;
  margin-bottom: 8px;
`;
export const RentalConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;
`;

export const TextInfo = styled.li`
  color: #363535;
  font-family: Montserrat;
  letter-spacing: -0.24px;

  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const AccentTextInfo = styled.span`
  color: #3470ff;
  font-weight: 600;
`;
export const RentalLink = styled.a`
width: 168px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  border-radius: 12px;
  background: #3470ff;
  padding: 12px 50px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  padding: 0;
  width: 24px;
  height: 24px;
  top: 16px;
  right: 16px;
  z-index: 2;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const CloseSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #121417;
  fill: none;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: #0b44cd;
  }
`;

