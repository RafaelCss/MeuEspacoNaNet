import { Input as InputAnt, Form as FormAnt } from 'antd';
import styled from 'styled-components';

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 50%;
  color: #ffc107;
  overflow: hidden;
  margin-bottom: 5rem;
`;

export const Input = styled(InputAnt)`
  width: 60rem;
  margin: 0.5rem 0.5rem;
  height: 2.5rem;
  color: #ffc107;
`;

export const Form = styled(FormAnt)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffc107;
`;
