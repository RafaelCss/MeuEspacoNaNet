import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';

import { AppProps } from 'next/app';
import Rodape from '../Components/Footer/Index';
import Menu from '../Components/Header/Index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />;
      <Rodape />
    </>
  );
}

export default MyApp;
