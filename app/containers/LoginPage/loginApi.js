import apisauce from '../../utils/api';
import { checkStatus, parseJSON } from '../../utils/request';

const create = () => {
  const api = apisauce;
  const userLogin = ({ username, password }) =>
    api
      .post('citizen/login', {
        username,
        password,
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(res => res);
  return { userLogin };
};

export default { create };
