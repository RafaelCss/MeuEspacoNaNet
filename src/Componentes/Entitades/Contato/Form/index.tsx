import { Button, Space, Select } from 'antd';
import { useState } from 'react';
import { Titulo } from '../../Home/Apresentacao/Style';
import { ContainerForm, Form, Input } from './style';
const { Option } = Select;
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
  const [newP, setNew] = useState<string>();

  function limparFormulario() {
    form.resetFields();
  }

  function salvarDados() {
    form.validateFields().then(async () => {
      const dados = form.getFieldsValue(true);
      //  resposta.status === 200 ? alert('Salvo com sucesso') : alert('Erro ao salvar')
    });
  }

  function fd(valor: string) {
    const texto = valor.substring(0, 50);
    const textoReduzido = valor.substring(50);
    setNew(texto.replace(textoReduzido, ''));
  }

  return (
    <>
      <Titulo key={'pedido'}>Contato</Titulo>
      <ContainerForm>
        <Form
          layout="vertical"
          //   labelCol={{ span: 4 }}
          form={form}
          name="form-servico"
          validateMessages={validateMessages}
        >
          <Form.Item
            name="Nome"
            rules={[{ required: true }]}
            label={<p style={{ color: 'white', margin: '10px 10px' }}>Nome</p>}
          >
            <Input key="nome-contato" name="nome" value={newP} />
          </Form.Item>
          <Form.Item
            name="Email"
            rules={[{ type: 'email', required: true }]}
            label={<p style={{ color: 'white' }}>Email</p>}
          >
            <Input key="email-contato" name={'email'} />
          </Form.Item>
          <Form.Item
            name="telefone"
            required
            label={<p style={{ color: 'white' }}>Telefone</p>}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="servico"
            rules={[{ required: true }]}
            label={<p style={{ color: 'white' }}>Serviços</p>}
          >
            <Input name={'servico'} />
          </Form.Item>
          <Form.Item
            name="descricao"
            rules={[{ required: true }]}
            label={<p style={{ color: 'white' }}>Descrição</p>}
            required
          >
            <Input.TextArea
              style={{ width: '60rem' }}
              onChange={e => fd(e.target.value as string)}
              value={newP}
            />
          </Form.Item>
        </Form>
        <Space direction="horizontal">
          <Button key="btn-submit" type="primary" onClick={salvarDados}>
            Enviar
          </Button>
          <Button key="btn-limpar-form" type="primary" onClick={limparFormulario}>
            Limpar
          </Button>
        </Space>
      </ContainerForm>
    </>
  );
}

export default FormularioCadastro;
