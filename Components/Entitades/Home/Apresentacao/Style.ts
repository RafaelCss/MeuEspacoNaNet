import styled from "styled-components";

const imagem = "/image/img1.jpg";
//#region
export const BannerHome = styled.div`
  display: block;
  background-image: url(${imagem});
  background-color: aqua;
  background-attachment: fixed;
  width: 100%;
  height: 30vh;
  margin-top: 0px;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: large;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: medium;
    font-family: "Times New Roman", Times, serif;
  }
`;
//#endregion
