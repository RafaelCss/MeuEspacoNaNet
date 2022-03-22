import styled, { keyframes } from "styled-components";

const imagem = "/image/img1.jpg";

export const BannerHome = styled.div`
  display: inline-block;
  background-image: url(${imagem});
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 60vh;
  h1 {
    display: flex;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 500;
    font-size: 48px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
`;
export const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

export const TextCursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;
export const Container = styled.p`
  display: flex;
  justify-content: center;
  left: 100px;
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

