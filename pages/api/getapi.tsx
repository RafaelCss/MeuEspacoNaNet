import axios from "axios";
import { createContext } from "vm";

export const GetApi = async () => {
  const response = await axios.get("https://api.github.com/users/RafaelCss")
  .then((res) => res.data)
  .catch(err => err);
  return response
};

const ContextoGitHub = createContext(GetApi)

console.log(ContextoGitHub)
