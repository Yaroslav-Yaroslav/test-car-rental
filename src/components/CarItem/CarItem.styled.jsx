import styled from 'styled-components';

export const Card = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: calc((100% - 29px) / 2);
  }
  @media screen and (min-width: 1224px) {
    width: calc((100% - 29px * 3) / 4);
  }
`;

export const ImgThumb = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
`;
export const Img = styled.img`
  object-fit: cover;
  height: 268px;
`;
export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 8px;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
`;
export const AccentTitle = styled.span`
  color: #3470ff;
`;

export const InfoList = styled.ul`
  margin-bottom: 4px;
  li:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    margin-left: 6px;
    vertical-align: middle;
  }
`;
export const SecondadyList = styled.ul`
  flex-grow: 1;

  li:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    margin-left: 6px;
    vertical-align: middle;
  }
`;
export const InfoText = styled.li`
  display: inline;
`;
export const LearnMoreBtn = styled.button`
  display: flex;
  height: 44px;
  padding: 12px 99px;
  margin-top: 28px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 12px;
  cursor: pointer;
  border: none;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
