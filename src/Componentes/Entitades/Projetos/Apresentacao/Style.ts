import styled from 'styled-components';

export const ContainerProjetos = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  align-items: center;
  justify-content: center;
  color: #ffc107;
`;

export const Titulo = styled.h1`
  width: 100%;
  height: 10%;
  font-size: 3rem;
  color: #ffc107;
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
  display: block;
  width: 200px;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

export const CardProjeto = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  width: 20vw;
  height: 20vh;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
