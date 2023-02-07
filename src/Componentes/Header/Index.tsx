import Link from 'next/link';
import React, { useState } from 'react';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Menu as MenuAnt } from 'antd';
import { MenuHeader, Tag } from './Style';
import DrawerMenu from '../Drawer';

export default function Menu() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

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

  function Modals() {
    return (
      <MenuHeader>
        <Link href="/">
          <Tag> Home</Tag>
        </Link>
        <Link href="/Projetos">
          <Tag>Projetos</Tag>
        </Link>
        <Link href="/Contato">
          <Tag>Contato</Tag>
        </Link>
      </MenuHeader>
    );
  }
  function onClose() {
    setCollapsed(false);
  }
  return (
    <>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        <MenuOutlined />
      </Button>
      <DrawerMenu onClose={onClose} open={collapsed} title={''}>
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
