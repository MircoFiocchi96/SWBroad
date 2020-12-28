import axiosInstance from '../../utils/api';
import streamQuery from '../DTOs/streamQuery/streamQuery';

const successCallback = (response) => {
  return response.data.data;
};

const errorCallbackDefault = (error) => {
  return [];
};

const generateQueryString = (streamQuery) => {
  const keys = Object.keys(streamQuery).filter(
    (p) => streamQuery[p] !== undefined
  );
  if (keys.length === 0) {
    return;
  }
  let res = '?' + keys[0] + '=' + streamQuery[keys[0]];

  for (let i = 1; i < keys.length; i++) {
    res += '&' + keys[i] + '=' + streamQuery[keys[i]];
  }

  return res;
};

export async function get(
  data,
  callback = successCallback,
  errorCallback = errorCallbackDefault
) {
  const query = new streamQuery(data);
  const queryString = generateQueryString(query);
  const url = queryString ? `/streams/${queryString}` : `/streams/`;
  const request = await axiosInstance.get(url).then(callback, errorCallback);

  return request;
}

export async function getById(
  id,
  //{ id, token },
  callback = successCallback,
  errorCallback = errorCallbackDefault
) {
  // axiosInstance.interceptors.request.use(function (config) {
  //   config.headers.Authorization = token ? `Bearer ${token}` : "";
  //   return config;
  // });

  const request = await axiosInstance
    .get(`/streams/` + id)
    .then(callback, errorCallback);

  const result = request ? request[0] : null;
  return result;
}