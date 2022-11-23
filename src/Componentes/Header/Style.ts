import styled from 'styled-components';
import { cores } from '../../styles/PaletaCores/Cores';

export const MenuHeader = styled.div`
  display: flex;
  background-color: ${cores.BlueGrotto};
  width: 100%;
  height: 20vh;
  justify-content: space-evenly;
  padding: 10px;
  margin-top: 0px;
  a {
    text-decoration: none;
  }
`;

export const Tag = styled.h2`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100px;
  height: 50px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  margin: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
  &:hover {
    color: #ffc107;
  }
  a {
    text-decoration: none;
  }
`;
