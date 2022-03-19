import { ReactElement } from "react";
import Menu from "../../Header/Header";
import Banner from "./Apresentacao/Layout";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function Home(): ReactElement {
  return (
    <Layout>
      <Header>
        <Menu />
      </Header>
      <Content>
        <Banner />
      </Content>
    </Layout>
  );
}

export default Home;
