import axiosInstance from '../../utils/api';

const successCallback = (response) => {
  return response;
};

const errorCallbackDefault = (error) => {
  return error;
};

export async function put(
  DTO,
  callback = successCallback,
  errorCallback = errorCallbackDefault
) {
  const request = await axiosInstance.put('/streams', DTO);
  return request.then(callback, errorCallback);
}
