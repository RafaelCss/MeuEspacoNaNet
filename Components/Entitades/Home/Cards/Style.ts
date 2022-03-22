import styled from "styled-components";

export const ContainerTecnologias = styled.section`
  display: inline-block;
  justify-content: center;
  padding: 10px;
  margin: 10px 0px 0 0;
  width: 100%;
  height: 100%;
`;
export const Titulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  margin: 5px 0px;
  h1 {
    font-size: 2em;
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px 20px 0;
  width: 100%;
  height: 300px;
  justify-content: space-around;
`;

export const Card = styled.div`
  display: flex;
  margin: 10px 10px 10px 10px;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: cover;
  background-position: center;
  background-color: #fff;
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
