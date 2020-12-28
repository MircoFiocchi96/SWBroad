import axiosInstance from '../../utils/api';

const successCallback = (response) => {
  return response.data.data;
};

const errorCallbackDefault = (error) => {
  return [];
};

export async function getFavorite(
  data,
  callback = successCallback,
  errorCallback = errorCallbackDefault
) {
  axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = data.token ? `Bearer ${data.token}` : '';
    return config;
  });
  const url = `/users/${data.nickname}/streams/?favorite=${data.favorite}`;
  console.log(url);
  const request = await axiosInstance.get(url).then(callback, errorCallback);

  return request;
}
