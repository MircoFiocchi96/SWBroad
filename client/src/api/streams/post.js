import axiosInstance from '../../utils/api';

const successCallback = (response) => {
  return response;
};

const errorCallbackDefault = (error) => {
  return error;
};

export async function post(
  DTO,
  callback = successCallback,
  errorCallback = errorCallbackDefault
) {
  const request = await axiosInstance
    .post('/streams', DTO)
    .then(callback, errorCallback);
  return request;
}

export async function addViewer(
  { connectionId, token, nickname, name, publisher },
  callback = successCallback,
  errorCallback = errorCallbackDefault
) {
  axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  const request = await axiosInstance
    .post(`/streams/addViewer`, {
      connectionId: connectionId,
      nickname: nickname,
      name: name,
      publisher: publisher
    })
    .then(callback, errorCallback);
  return request;
}
