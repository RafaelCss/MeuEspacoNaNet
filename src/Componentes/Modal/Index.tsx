import { useState } from 'react';
import { Modal } from '../../servicos/Interfaces/IModal';
import { ModalAviso } from './Style';

export const ModalApp = ({
  msg,
  isModalVisible,
  onOk,
  onCancel,
  title,
}: Modal) => {
  return (
    <ModalAviso
      title={title}
      open={isModalVisible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <p>{msg}</p>
    </ModalAviso>
  );
};
