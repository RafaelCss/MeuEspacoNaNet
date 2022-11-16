import styled from 'styled-components';

export const ContainerProjetos = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  text-decoration: none;
  background-color: black;
  margin-top: 50px;
  margin-left: 50px;
  padding: 20px;
  ul {
    list-style: none;
  }
  li {
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const Titulo = styled.h1`
  width: 100%;
  height: 100%;
  font-size: 3rem;
  color: black;
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const FotoPerfil = styled.div`
  display: flex;
  width: 200px;
  height: 250px;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
