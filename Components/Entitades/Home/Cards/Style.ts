import styled from "styled-components";
import {paleta} from '../../../../public/Estilos/PaletaCores/Cores';

export const ContainerTecnologias = styled.section`
  display: flex;
  overflow: auto;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px 0px 0 0;
  width: 100%;
  height: 100%;
  background-color: black;
`;
export const Titulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 5px 0px;
  h1 {
    font-size: 3em;
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px 20px 0;
  width: 100%;
  height: 900px;
  justify-content: space-around;
  align-items: center;   
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px 5px 5px 5px;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: #304352; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #d7d2cc, #304352); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #d7d2cc, #304352); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  p {
    font-size: 1.5em;
  }
  box-shadow: 15px 25px 15px rgba(0, 0, 0, 0.75);
  :hover {
    transition: 0.1s;
    box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.75);
    pointer-events: stroke;
  }
`;


export const CardCarousel = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0px 5px 5px 0px;
  width: 50%;
  height: 300px;
  background: ${paleta[0].AcoAzul3}; 
  padding-top: 50px;
  padding-bottom: 50px;
`;