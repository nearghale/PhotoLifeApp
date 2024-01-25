import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NQ.FcypTOF5Vve1Q5V4Q7hX4f6ESmegL7Xg84x9Np6BiR2riF1ue-ShRyLkJHIM',
  },
});
