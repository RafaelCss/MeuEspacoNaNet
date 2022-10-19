import { useState } from 'react';
import { Modal } from '../Servicos/Interfaces/IModal';
import { ModalAviso } from './Style';

export const ModalApp = ({ msg, isModalVisible, onOk, onCancel, title }: Modal) => {
  return (
    <ModalAviso title={title} visible={isModalVisible} onOk={onOk} onCancel={onCancel}>
      <p>{msg}</p>
    </ModalAviso>
  );
};
