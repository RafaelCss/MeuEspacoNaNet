import React, { useDebugValue } from "react";
import MenuHeader from "../../Components/Header/Header";
import { Table, Button, Space, Input, Checkbox, Tree } from "antd";
import { sorce } from "./dados";
import { SearchOutlined } from "@ant-design/icons";
import Head from "next/head";

interface IState {
  searchText: string;
  filtered: any;
  setSelectedKeys?: ([]) => void;
  selectedKeys: string;
  confirm: () => void;
  clearFilters: () => void;
}
export default function Contato() {
  function handleSearch(confirm) {
    confirm();
  }

  function handleReset(clearFilters) {
    // desmarcar checkbox,3
    console.log(clearFilters);
    clearFilters();
  }

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: IState) => (
      <div style={{ padding: 8 }}>
        {dataIndex == "ingles" ? (
          <Space>
            <Checkbox.Group>
              <Checkbox value={"Ativo"} onChange={(e) => setSelectedKeys("true" ? ["true"] : [])}>
                Ativo
              </Checkbox>
              <Checkbox value={"Inativo"} onChange={(e) => setSelectedKeys("false" ? ["false"] : [])}>
                Inativo
              </Checkbox>
              <Button type='primary' onClick={() => handleSearch(confirm)} icon={<SearchOutlined />} size='small' style={{ width: 90 }}>
                Buscar
              </Button>
              <Button onClick={() => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
                Limpar
              </Button>
            </Checkbox.Group>
          </Space>
        ) : (
          <>
            <Input placeholder={`Buscar ${dataIndex}`} value={selectedKeys[0]} onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])} onPressEnter={() => handleSearch(confirm)} style={{ width: 188, marginBottom: 8, display: "block" }} />
            <Space>
              <Button type='primary' onClick={() => handleSearch(confirm)} icon={<SearchOutlined />} size='small' style={{ width: 90 }}>
                Buscar
              </Button>
              <Button onClick={() => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
                Limpar
              </Button>
            </Space>
          </>
        )}
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toString().toLowerCase()),

    /* onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(100));
      }
    }, */
  });

  const id = Math.random();

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Idade",
      dataIndex: "age",
      key: "age",
      width: "30%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Status",
      dataIndex: "ingles",
      key: "ingles",
      width: "30%",
      render: (value) => {
        if (value === true) {
          return "Ativo";
        }
        return "Inativo";
      },
      ...getColumnSearchProps("ingles"),
    },
  ];

  return (
    <>
      <MenuHeader />
      <Table key={id} columns={columns} dataSource={sorce} size={"small"} bordered={true}>
        Olga
      </Table>
    </>
  );
}
