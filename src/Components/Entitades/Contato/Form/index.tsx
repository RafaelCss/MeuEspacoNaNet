import { Button, Form, Input, Space } from 'antd';
import { ContainerForm, InputForm } from './style';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

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
        <h1>Cadastro de Contato</h1>
      </div>
      <Form form={form} name="nest-messages" validateMessages={validateMessages}>
        <Form.Item name="Nome" rules={[{ required: true }]} label="Nome">
          <InputForm name="nome" />
        </Form.Item>
        <Form.Item name="Email" rules={[{ type: 'email', required: true }]} label="Email">
          <InputForm name={'email'} />
        </Form.Item>
        <Form.Item name="servico" rules={[{ required: true }]} label="Serviço">
          <InputForm name={'servico'} />
        </Form.Item>
        <Form.Item name="descricao" rules={[{ required: true }]} label="Descrição" required>
          <Input.TextArea name="descricao" />
        </Form.Item>
        <Form.Item name="telefone" required label="Telefone:" rules={[{ required: true }]}>
          <InputForm />
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
