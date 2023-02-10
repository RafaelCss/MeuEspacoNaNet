import React from 'react';
import B from './style';

interface IButtonNormal {
  onClick: () => void;
  children: React.ReactElement;
}

function ButtonNormal({ onClick, children }: IButtonNormal) {
  return <B.ButtonEnviar onClick={onClick}>{children}</B.ButtonEnviar>;
}

function ButtonLimpar({ onClick, children }: IButtonNormal) {
  return <B.ButtonLimpar onClick={onClick}>{children}</B.ButtonLimpar>;
}

export default { ButtonLimpar, ButtonNormal };
