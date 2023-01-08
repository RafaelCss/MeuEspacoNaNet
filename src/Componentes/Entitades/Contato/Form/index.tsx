import { Button, Space, Select } from 'antd';
import { useState } from 'react';
import { BannerHome } from '../../../Animacoes/AnimacaoTexto/Style';
import { Titulo } from '../../Home/Apresentacao/Style';
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
  const [newP, setNew] = useState<string>();
  function fd(valor: string) {
    const palavra1 = valor.substring(0, 50);
    const palavr2 = valor.substring(50);
    console.log(newP);
    setNew(palavra1.replace(palavr2, ''));
  }
  return (
    <>
      <BannerHome>
        <Titulo key={'pedido'}>Pedido de serviço</Titulo>
      </BannerHome>
      <ContainerForm>
        <Form
          layout="horizontal"
          labelCol={{ span: 4 }}
          form={form}
          name="form-servico"
          validateMessages={validateMessages}
        >
          <Form.Item name="Nome" rules={[{ required: true }]} label="Nome">
            <Input key="nome-contato" name="nome" value={newP} />
          </Form.Item>
          <Form.Item name="Email" rules={[{ type: 'email', required: true }]} label="Email">
            <Input key="email-contato" name={'email'} />
          </Form.Item>
          <Form.Item name="telefone" required label="Telefone:" rules={[{ required: true }]}>
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
            <Select showSearch maxLength={50} onSearch={e => fd(e as string)} value={newP}></Select>
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
