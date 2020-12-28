import { DISPLAY_NOTIFICATION } from './constants';

export const displayNotification = (payload) => ({
  type: DISPLAY_NOTIFICATION,
  payload: {
    message: '',
    type: 'warning',
    extra: {},
    ...payload,
  },
});
