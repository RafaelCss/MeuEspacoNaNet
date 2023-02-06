import styled, { keyframes } from 'styled-components';
import { cores } from '../../../styles/PaletaCores/Cores';
export const BannerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 30vh;
  background-color: #00ffa7;
  h1 {
    color: white;
    font-size: 62px;
  }
`;
export const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

export const TextCursor = styled.span`
  align-items: center;
  justify-content: center;
  color: white;
  height: 25px;
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  display: inline;
  margin-top: 5px;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;
export const Container = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 100px;
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;
