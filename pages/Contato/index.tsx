import React, { useDebugValue, useState } from "react";
import MenuHeader from "../../Components/Header/Header";
import { Table, Button, Space, Input, Checkbox, Tree } from "antd";
import { source } from "./dados";
import { SearchOutlined } from "@ant-design/icons";

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
    console.log("confirm", confirm);
    confirm();
  }

  function handleReset(clearFilters) {
    clearFilters();
  }
  {
    const [checkbox, Setcheckbox] = useState("false");
  }

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: IState) => (
      <div style={{ padding: 8 }}>
        {dataIndex == "ingles" ? (
          <Space>
            <Checkbox.Group>
              <Checkbox checked={true} value={"Ativo"} onChange={(e) => setSelectedKeys("true" ? ["true"] : [])}>
                Ativo
              </Checkbox>

              <Checkbox checked={true} value={"Inativo"} onChange={(e) => setSelectedKeys("false" ? ["false"] : [])}>
                Inativo
              </Checkbox>

              <Button type='primary' onClick={() => handleSearch(confirm)} icon={<SearchOutlined />} size='small' style={{ width: 90 }}>
                Buscar
              </Button>

              <Button onClick={(e) => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
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
              <Button onClick={(e) => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
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
      <Table key={id} columns={columns} dataSource={source} size={"small"} bordered={true}>
        Olga
      </Table>
    </>
  );
}
