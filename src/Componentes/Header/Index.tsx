import Link from 'next/link';
import React, { useState } from 'react';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Affix, Button, Menu as MenuAnt } from 'antd';
import { MenuHeader, Tag } from './Style';
import DrawerMenu from '../Drawer';

export default function Menu() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [top, setTop] = useState(10);
  const toggleCollapsed = () => {
    switch (collapsed) {
      case true:
        setCollapsed(false);
        break;
      case false:
        setCollapsed(true);
        break;
      default:
        setCollapsed(false);
    }
  };

  function onClose() {
    setCollapsed(false);
  }
  return (
    <>
      <Button
        onClick={toggleCollapsed}
        style={{
          backgroundColor: 'yellow',
          border: 'none',
          width: '50px',
          height: '50px',
          fontSize: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '10px'
        }}
      >
        <MenuOutlined />
      </Button>
      <DrawerMenu onClose={onClose} open={collapsed} title={'Menu'}>
        <>
          <Link href="/">
            <Tag> Home</Tag>
          </Link>
          <Link href="/Projetos">
            <Tag>Projetos</Tag>
          </Link>
          <Link href="/Contato">
            <Tag>Contato</Tag>
          </Link>
        </>
      </DrawerMenu>
    </>
  );
}
