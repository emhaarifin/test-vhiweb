import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://reqres.in/api',
});

export default axios;
