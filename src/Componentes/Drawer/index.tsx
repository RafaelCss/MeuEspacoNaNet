import React, { useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';

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
      title="Basic Drawer"
      placement={placement || direcaoAbertura}
      closable={false}
      onClose={onClose}
      open={open}
      key={placement}
      style={{ backgroundColor: 'black' }}
      destroyOnClose
    >
      {children}
    </Drawer>
  );
}

export default DrawerMenu;
