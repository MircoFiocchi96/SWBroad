import axiosInstance from '../../utils/api';
import categoryDto from '../DTOs/categories/categoriesDto';

const successCallback = (response) => {
  const categories = response.data.data.map((e) => {
    return new categoryDto(e);
  });
  return categories;
};

const errorCallbackDefault = (error) => {
  return [];
};

export async function get(
  token,
  callback = successCallback,
  errorCallback = errorCallbackDefault
) {
  axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });
  const url = '/categories';
  const request = await axiosInstance.get(url).then(callback, errorCallback);
  return request;
}
