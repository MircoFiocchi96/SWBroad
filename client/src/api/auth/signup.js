import axiosInstance from '../../utils/api';

const successCallback = (response) => {
  return response.status === 200 ? response.data : false;
};

const errorCallbackDefault = (error) => {
  return false;
};

export async function signup(
  { token, nickname },
  callback = successCallback,
  errorCallback = errorCallbackDefault
) {
  axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });

  const request = await axiosInstance
    .post(`/auth/signup`, {
      nickname: nickname,
    })
    .then(callback, errorCallback);

  return request;
}
