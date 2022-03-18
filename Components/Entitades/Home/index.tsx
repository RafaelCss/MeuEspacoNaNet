import { ReactElement } from "react";
import Menu from "../../Header/Header";
import Banner from "./Apresentacao/Layout";

function Home(): ReactElement {
  return (
    <>
      <Menu />
      <Banner />
    </>
  );
}

export default Home;
