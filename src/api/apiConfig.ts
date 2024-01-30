import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.Il-mhblJXbRUs2ZtdgbEMfnPBYXRCnMyJA8dSuIf0rFP5IMF8qlH1fHegw4B',
  },
});
