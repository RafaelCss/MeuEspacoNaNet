import styled from 'styled-components'

export const CorpoPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  text-decoration: none;
  ul {
    list-style: none;
  }

  li {
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
  }
`

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
`

export const FotoPerfil = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: beige;
`
