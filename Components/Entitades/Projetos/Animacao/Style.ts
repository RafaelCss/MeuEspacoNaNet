import styled from 'styled-components';

export const Fundo = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const Tijolos = styled.div`
  margin: 2px;
  padding: 1px;
  height: 20px;
  background-color: ${props => props.color};
`;
