import styled from 'styled-components';
import { cores } from '../../styles/PaletaCores/Cores';

export const MenuHeader = styled.div`
  display: flex;
  width: 80%;
  height: 10vh;
  justify-content: space-evenly;
  // padding: 10px;
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
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  margin-top: 1.5rem;
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
