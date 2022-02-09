import axios from "types-axios";


const url = process.env.BASE_URL;


const getApi = async (url) =>{
    const response = await axios.get(url);
    console.log(response);
    return response.data;
}


getApi(url);
 
