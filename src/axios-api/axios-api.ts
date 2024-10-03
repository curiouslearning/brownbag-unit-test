import axios from 'axios';

export class AxiosApi {
  get() {
    return axios.get('https://cat-fact.herokuapp.com/facts/');
  }
}