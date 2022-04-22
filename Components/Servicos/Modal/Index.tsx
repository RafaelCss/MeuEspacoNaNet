import { useState } from 'react'
import { Modal } from '../../Interfaces/IModal'
import { ModalAviso } from './Style'

export const ModalApp = ({
  msg,
  isModalVisible,
  onOk,
  onCancel,
}: Modal) => {

  return (
    <ModalAviso
      title="Basic Modal"
      visible={isModalVisible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <p>{msg}</p>
    </ModalAviso>
  )
}
