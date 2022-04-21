import styled from "styled-components";
import {paleta} from '../../../../styles/PaletaCores/Cores';
import { Carousel } from 'antd';

export const ContainerTecnologias = styled.section`
  display: flex;
  overflow: auto;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100%;
  background-color:black;
`;
export const Titulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 3rem;
  font-weight: 500;
  margin: 0px;
  color: white;
  h1 {
    font-size: 3em;
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 10px;
  width: 100%;
  height:80%;
  text-align: center;
  justify-content: space-around;
  align-items: center;   
`;

export const Card = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 5px 5px 5px;
  width: 80%;
  height:50%;
  background-color: white;
  padding-top: 10px;
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
  width: 800px;
  height: 300px;
`;

export const CardCursos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 5px 5px 5px;
  width: 20%;
  height:15%;
  background-color: white;
  cursor: pointer;
`;
