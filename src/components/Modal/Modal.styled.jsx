import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 777;
  overflow-y: auto;
`;
export const ModalContainer = styled.div`
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
