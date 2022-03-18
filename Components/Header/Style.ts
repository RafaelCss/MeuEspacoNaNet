import React from "react";
import styled from "styled-components";

export const MenuHeader = styled.header`
  display: flex;
  background-color: #333;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  a {
    list-style: none;
    display: inline-flex;
    color: white;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    text-decoration: none;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: #ffc107;
    }
  }
`;
