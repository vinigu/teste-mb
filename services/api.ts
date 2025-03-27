import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { apiKey, apiUrl } from '../helpers/config';
import ValidationException from '../helpers/ValidationException';

axios.defaults.baseURL = `${apiUrl}${apiKey}` ;
axios.defaults.withCredentials = true;
axios.defaults.headers.common = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'allow-control-allow-origin': '*',
  'Access-Control-Allow-Methods': '*',
};

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    /**
     * Todo erro, com excessão do ValidationException será
     * logado no Sentry por padrão.
     *
     * ValidationException Deverá ser tratado dentro de um TryCatch.
     *
     * Loading, TryCatches e tratamento de erros deverão acontecer fora
     * dos contextos.
     */
    if (error instanceof AxiosError) {
      if (error.response) {
        const {
          response: { data },
        } = error;

        if (data.errors) {
          return Promise.reject(new ValidationException(data.errors));
        }
      }

      if (axios.isCancel(error)) {
        return false;
      }

      toast.error('Aconteceu algum problema do nosso lado. Tente novamente mais tarde', {
        position: "top-right",
        autoClose: 5000,
      });

    }
    return Promise.reject(error);
  },
);

type GetItems = {
  url: string;
};

type PostItems = {
  url: string;
  data?: object | [];
};

type GetQueryItems = {
  url: string;
  data?: object;
};

export const patch = async ({ url, data }: PostItems) => {
  const item = await axios.patch(url, data);
  return item.data;
};

export const get = async ({ url }: GetItems) => {
  const items = await axios.get(url);
  return items.data;
};

export const getQuery = async ({ url, data }: GetQueryItems) => {
  const items = await axios.get(url, data);
  return items.data;
};

export const post = async ({ url, data }: PostItems) => {
  const item = await axios.post(url, data);
  return item.data;
};

export const put = async ({ url, data }: PostItems) => {
  const item = await axios.put(url, data);
  return item.data;
};

export default axios;
