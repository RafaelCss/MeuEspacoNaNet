

 export  const GetApi = async () =>{
    const response = fetch("https://api.github.com/users/RafaelCss")
    .then(res => 
    console.log(res));
    return response;
}
GetApi();

 
