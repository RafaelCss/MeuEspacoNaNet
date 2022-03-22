import { ReactElement } from "react";
import Menu from "../../Header/Header";
import Banner from "./Apresentacao/Layout";
import { Layout } from "antd";
import { Rodape } from "../../Footer/Rodape";
import Cards from "./Cards/Cards";

const { Header, Footer, Sider, Content } = Layout;

function Home(): ReactElement {
  return (
    <Layout>
      <Menu />
      <Content>
        <Banner />
        <Cards />
      </Content>
      <Rodape />
    </Layout>
  );
}

export default Home;
