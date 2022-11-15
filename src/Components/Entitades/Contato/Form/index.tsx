import { Button, Space } from 'antd';
import { ContainerForm, Form, Input } from './style';
const { TextArea } = Input;
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};

function FormularioCadastro() {
  const [form] = Form.useForm();

  function limparFormulario() {
    form.resetFields();
  }
  function salvarDados() {
    form.validateFields().then(async () => {
      const dados = form.getFieldsValue(true);
      //  resposta.status === 200 ? alert('Salvo com sucesso') : alert('Erro ao salvar')
    });
  }

  return (
    <ContainerForm>
      <div>
        <h1>Pedido de serviço</h1>
      </div>
      <Form
        layout="horizontal"
        labelCol={{ span: 4 }}
        form={form}
        name="form-servico"
        validateMessages={validateMessages}
      >
        <Form.Item name="Nome" rules={[{ required: true }]} label="Nome">
          <Input key="nome-contato" name="nome" />
        </Form.Item>
        <Form.Item name="Email" rules={[{ type: 'email', required: true }]} label="Email">
          <Input key="email-contato" name={'email'} />
        </Form.Item>
        <Form.Item name="telefone1" required label="Telefone:" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="servico" rules={[{ required: true }]} label="Serviço">
          <Input name={'servico'} />
        </Form.Item>
        <Form.Item
          name="descricao"
          rules={[{ required: true, max: 200 }]}
          label="Descrição"
          required
        >
          <TextArea
            showCount
            autoSize={{ minRows: 3, maxRows: 5 }}
            maxLength={200}
            style={{ width: '400px', marginLeft: '10px', resize: 'none' }}
            name="descricao"
          />
        </Form.Item>
        <Space direction="horizontal">
          <Button key="btn-submit" type="primary" onClick={salvarDados}>
            Enviar
          </Button>
          <Button key="btn-submit" type="primary" onClick={limparFormulario}>
            Limpar
          </Button>
        </Space>
      </Form>
    </ContainerForm>
  );
}

export default FormularioCadastro;
