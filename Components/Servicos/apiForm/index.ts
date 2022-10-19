import axios from 'axios';
import { IDadosFormulario } from '../Interfaces/IResposta';

const enviarFormulario = async (dados: IDadosFormulario) => {
  const resposta = await axios.post('/', dados);
};
