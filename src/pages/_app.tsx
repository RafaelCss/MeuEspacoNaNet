import { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import GlobalStyle from '../styles/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
