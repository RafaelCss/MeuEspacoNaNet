import React, { ReactElement, useEffect, useState } from "react";
import { Image, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import GetItem from "../../../Servicos/DadosJson";

export function Base(): ReactElement {
  const [imagem, setImagem] = useState(GetItem("avatar_url"));

  return <Avatar size={64} icon={<UserOutlined />} srcSet={imagem} />;
}
