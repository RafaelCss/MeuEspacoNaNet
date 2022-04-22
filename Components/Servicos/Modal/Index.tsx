import { useState } from 'react'
import { Modal } from '../../Interfaces/IModal'
import { ModalAviso } from './Style'

export const ModalApp = ({
  msg,
  isModalVisible,
  handleOk,
  handleCancel,
  onOk,
  onCancel,
}: Modal) => {
  return (
    <ModalAviso
      title="Basic Modal"
      visible={isModalVisible}
      onOk={() => handleOk}
      onCancel={handleCancel}
    >
      <p>{msg}</p>
    </ModalAviso>
  )
}
