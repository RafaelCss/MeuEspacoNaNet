import React from 'react';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';

interface IDrawerMenu {
  direcaoAbertura?: DrawerProps['placement'];
  onClose: () => void;
  open: boolean;
  children: React.ReactElement;
  title: string;
}

function DrawerMenu({ direcaoAbertura, onClose, open, children, title }: IDrawerMenu) {
  const placement: DrawerProps['placement'] = 'left';

  return (
    <Drawer
      title={<h2 style={{ color: 'white' }}>{title}</h2>}
      placement={placement || direcaoAbertura}
      closable={false}
      onClose={onClose}
      open={open}
      key={placement}
      style={{ backgroundColor: 'black', color: 'white' }}
      destroyOnClose
    >
      {children}
    </Drawer>
  );
}

export default DrawerMenu;
