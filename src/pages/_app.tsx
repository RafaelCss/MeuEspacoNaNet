import 'antd/dist/reset.css';

import { AppProps } from 'next/app';
import Rodape from '../Componentes/Footer/Index';
import Menu from '../Componentes/Header/Index';

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
