export interface Modal {
  msg?: string;
  isModalVisible?: boolean;
  onOk ?: () => boolean;
  onCancel ?: () => boolean;
}
