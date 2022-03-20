import styled from "styled-components";

export const MenuHeader = styled.header`
  display: flex;
  background-color: #232526;
  width: 100%;
  height: 20vh;
  justify-content: space-evenly;
  padding: 10px;
  margin-top: 0px;
  border-bottom: solid 1px white;
  a {
    list-style: none;
    display: flex;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    margin: 30px;
    cursor: pointer;
    &:hover {
      color: #ffc107;
    }
  }
`;
