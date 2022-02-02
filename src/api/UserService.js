import axios from 'axios';

const BASE_URL =
  'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data';

export class UserService {
  static getUsers() {
    return axios.get(BASE_URL).then((response) => {
      return response;
    });
  }
}
