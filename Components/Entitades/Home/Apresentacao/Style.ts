import styled from "styled-components";
import {paleta} from '../../../../styles/PaletaCores/Cores';
import { Carousel } from 'antd';

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
  margin: 0px;
  background-color: #304352;
  h1 {
    font-size: 3em;
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
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


export const CardCarousel = styled(Carousel)`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin:0px;
  width: 80%;
  height: 300px;
  border: solid 1px black;
  background: #304352; 
  padding-bottom: 50px;
`;