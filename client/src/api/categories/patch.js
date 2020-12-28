import axiosInstance from '../../utils/api';

const successCallback = (response) => {
  return response;
};

const errorCallbackDefault = (error) => {
  return error;
};

export async function patch(
  data,
  callback = successCallback,
  errorCallback = errorCallbackDefault
) {
  axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = data.token ? `Bearer ${data.token}` : '';
    return config;
  });
  const url = `/users/${data.nickname}/categories/${data.category}`;
  const request = await axiosInstance
    .patch(url, { like: data.like })
    .then(callback, errorCallback);

  return request;
}
