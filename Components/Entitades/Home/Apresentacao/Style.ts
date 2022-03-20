import styled, { keyframes } from "styled-components";

const imagem = "/image/img1.jpg";

export const BannerHome = styled.div`
  display: block;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #414345, #232526); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /*   background-repeat: no-repeat;
  background-origin: content-box;
  background-size: cover;
  background-position: center; */
  width: 100%;
  height: 50vh;
  margin-top: 0px;
  h1 {
    display: flex;
    margin: 10px;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: large;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  h2 {
    display: flex;
    margin: 10px;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: medium;
    font-family: "Times New Roman", Times, serif;
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
  display: inline-block;
  left: 100px;
  margin: 0;
  font-size: 28px;
  color: green;
`;
