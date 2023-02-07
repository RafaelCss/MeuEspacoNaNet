import styled from 'styled-components';
import { cores } from '../../styles/PaletaCores/Cores';

export const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 50vh;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  padding: 0.5;
  a {
    text-decoration: none;
  }
`;

export const Tag = styled.h2`
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
