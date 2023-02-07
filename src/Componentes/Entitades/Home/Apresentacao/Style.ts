import styled from 'styled-components';

export const ContainerTecnologias = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  margin: 2.5rem 2.5rem;
  width: 100%;
  height: 50vh;
  justify-content: space-evenly;
  align-items: center;
  // background-color: black;
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
  color: #ffc107;
  h1 {
    color: #ffc107;
    font-size: 3em;
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 10px;
  width: 80%;
  height: 80%;
  text-align: center;
  justify-content: space-around;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0);
  box-shadow: 0 8px 32px 0 rgba(0, 7, 134, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  width: 15vw;
  height: 20vh;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
  justify-content: center;
  text-align: center;
  margin: 0.5rem 0.5rem;
  padding: 2rem;
  object-fit: cover;
  :hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardCarousel = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
`;

export const CardCursos = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.5rem 0.1rem;
  width: 60vw;
  height: 20vh;
  padding: 2.5rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
