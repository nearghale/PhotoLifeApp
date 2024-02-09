import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mw.9e06CbqEHyFGnYEaVWYXs2T0mshfjQ_0-uJbxJAg5TkZinhCS2iXb7858XRs',
  },
});
