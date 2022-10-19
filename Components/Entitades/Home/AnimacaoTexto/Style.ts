import styled, { keyframes } from 'styled-components';

const imagem = '/image/img1.jpg';

export const BannerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 60vh;
  background: #005c97; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #363795, #005c97); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: #005c97; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #363795, #005c97); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-top: solid 1px;
  h1 {
    display: block;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: 500;
    font-size: 48px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
      Geneva, Verdana, sans-serif;
  }
`;
export const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

export const DivTeste = styled.div`
  display: block;

  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: 500;
  margin: 50px;
  overflow: hidden;
  z-index: 10;
  background-color: aqua;
  color: white;
  h1 {
    display: block;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: 500;
    font-size: 48px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
      Geneva, Verdana, sans-serif;
  }
`;

export const TextCursor = styled.span`
  color: black;
  height: 25px;
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  display: inline;
  margin-top: 5px;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;
export const Container = styled.p`
  display: flex;
  justify-content: center;
  left: 100px;
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: black;
`;
