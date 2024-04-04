import axios from 'axios'
// const baseUrl = 'http://localhost:3001/all'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then(response => response.data)
}
  
const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data)
}
  
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data)
}


const getByName = (name) => {
  const request = axios.get(`${baseUrl}/name/${name}`);
  return request.then(response => response.data)
}


//   names of the keys and the assigned variables are the same
// export default { 
//   getAll: getAll, 
//   create: create, 
//   update: update 
// }
  export default { getAll, create, update, getByName }

