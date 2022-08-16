import { Button, Form, Input, Space } from 'antd';
import { ContainerForm, InputForm, LabelForm } from './style';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};



/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

function FormularioCadastro() {
  const [form] = Form.useForm()

  function limparFormulario() {
    form.resetFields();
  };


  function salvarDados() {
    form.validateFields().then(async () => {
      const dados = form.getFieldsValue(true);
      const resposta = (await axios.post('https://localhost:7083/api/ContatoClientes/', dados)).data
      limparFormulario()
      console.log(resposta);
    //  resposta.status === 200 ? alert('Salvo com sucesso') : alert('Erro ao salvar')
    });
  };



  return (
    <ContainerForm >
      <div> <h1>Cadastro de Contato</h1> </div>
      <Form
        form={form}
        name="nest-messages"
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['Nome']}
          rules={[{ required: true }]}
          label={<LabelForm>Nome</LabelForm>}
        >
          <InputForm name='nome' />
        </Form.Item>
        <Form.Item
          name={['Email']}
          rules={[{ type: 'email', required: true }]}
          label={<LabelForm>Email</LabelForm>}
        >
          <InputForm name={'email'} />
        </Form.Item>
        <Form.Item
          name={['servico']}
          rules={[{ required: true }]}
          label={<LabelForm>Serviço</LabelForm>}
        >
          <InputForm name={'servico'} />
        </Form.Item>
        <Form.Item
          name={['descricao']}
          rules={[{ required: true }]}
          label={<LabelForm>Descrição</LabelForm>}
          required
        >
          <Input.TextArea name={'descricao'} />
        </Form.Item>
        <Form.Item
          name={['telefone']}
          required
          label={'Telefone:'}
          rules={[{ required: true }]}
        >
          <InputForm name={'telefone'} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Space direction='horizontal'>
            <Button type="primary" htmlType="submit" onClick={salvarDados}>
              Submit
            </Button>
            <Button type="primary" htmlType="reset" onClick={limparFormulario}>
              Limpar
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </ContainerForm>
  );
};

export default FormularioCadastro;