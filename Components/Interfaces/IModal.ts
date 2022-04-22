export interface Modal {
  msg?: string;
  isModalVisible?: boolean;
  handleCancel?: () =>  boolean;
  handleOk?: () => boolean;
  onOk ?: () => any;
  onCancel ?: () => any
}
