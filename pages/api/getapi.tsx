import axios from "axios";

export const GetApi = async () => {
  const response = await axios.get("https://api.github.com/users/RafaelCss").then((res) => res);
  return response;
};
GetApi();
