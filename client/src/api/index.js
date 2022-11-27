const axios = require('axios');

export const getTest = async() => {
  const request = await axios.get('localhost:4000/test');
  console.log(request);
  return request;
}