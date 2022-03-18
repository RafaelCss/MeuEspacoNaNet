import styled from "styled-components";
import ih from "../../../../public/image/images.png";

const imagem = "/image/img1.jpg";

export const BannerHome = styled.div`
  background-image: url(${imagem});
  width: 100%;
  height: 200%;
  background-color: aqua;
  background-attachment: fixed;
  h1 {
    color: white;
    font-size: large;
    font-family: "Times New Roman", Times, serif;
  }
  h2 {
    color: white;
    font-size: medium;
    font-family: "Times New Roman", Times, serif;
  }
`;

