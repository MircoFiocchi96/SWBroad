import socketIO from 'socket.io-client';
import WS_HOST from '../config/ws';

const getWebSocket = () => socketIO(WS_HOST);

export default getWebSocket;
