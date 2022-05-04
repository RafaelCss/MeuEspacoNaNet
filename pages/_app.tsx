import "antd/dist/antd.css";
import 'antd/dist/antd.min.css';

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

