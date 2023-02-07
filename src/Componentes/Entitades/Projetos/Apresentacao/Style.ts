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
  flex-direction: column;
  width: 15vw;
  height: 15vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0.5rem 0.5rem;
  padding: 2rem;
  object-fit: cover;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 16px;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: white;
  text-decoration: none;
  :hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
  }
`;

export const Paragrafo = styled.p`
  display: block;
  font-size: 1rem;
  color: #ffc107;
`;

/* background: rgba(255, 255, 255, 0.08);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(2px);
-webkit-backdrop-filter: blur(2px);
  */
