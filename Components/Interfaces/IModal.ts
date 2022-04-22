export interface Modal {
  msg : string;
  isModalVisible: boolean;
  title : string;
  onOk : () => boolean;
  onCancel : () => boolean;
}
