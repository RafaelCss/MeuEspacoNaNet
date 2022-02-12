import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import Link from "next/link";

 const Header = styled.header`
  display: flex;
  background-color: #333;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  ul > li {
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

export default function Home() {
  const [count, setCount] = useState(0);
  return (

      <Header>
        <ul>
          <li>
            <Link href='/Projetos'>Projetos</Link>
          </li>
          <li>
            <Link href='/Contato'>Contato</Link>
          </li>
          <li>
            <Link href='/'>Sobre</Link>
          </li>
        </ul>
      </Header>

  );
}
