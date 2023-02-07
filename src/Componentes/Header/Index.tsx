import Link from 'next/link';
import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Menu as MenuAnt } from 'antd';
import { MenuHeader, Tag } from './Style';

export default function Menu() {
  const [collapsed, setCollapsed] = useState<string>('none');

  const toggleCollapsed = () => {
    setCollapsed('block');
  };

  function Modals() {
    return (
      <MenuHeader style={{ display: collapsed }}>
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

  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <MenuAnt
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        children={<>{Modals}</>}
      />
    </div>
  );
}
