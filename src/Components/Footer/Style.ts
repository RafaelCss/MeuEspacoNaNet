import styled from 'styled-components';
import { cores } from '../../styles/PaletaCores/Cores';
export const RodapeHome = styled.footer`
  width: 100%;
  height: 10vh;
  border-top: solid 1px;
  background-color: ${cores.BlueGrotto};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: #fff;
  }
`;
