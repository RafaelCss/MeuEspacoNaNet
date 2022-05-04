import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    margin: 0;
    font-weight: 600;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .ant-modal-confirm-body>.anticon+.ant-modal-confirm-title+.ant-modal-confirm-content {
    margin-left: 0;
  }
`;


