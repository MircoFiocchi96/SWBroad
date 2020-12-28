export const Red5ProConfig = {
  host: 'hartwell-stream-manager.swrkstest.co',
  protocol: 'wss',
  port: 443,
  app: 'streammanager',
  nodeApp: 'live',
  apiVersion: '4.0',
  proxy: 'streammanager',
};

export const STUNHost = 'stun:stun2.l.google.com:19302';

export const PublisherConfig = ({ streamName, mediaElementId, nodeData }) => ({
  ...Red5ProConfig,
  streamName,
  streamMode: 'live',
  mediaElementId,
  bandwidth: {
    audio: 56,
    video: 512,
  },
  connectionParams: {
    host: nodeData.serverAddress,
    app: nodeData.scope,
    type: 'publisher',
    nickname: streamName,
    token: 'mytoken',
  },
});

export const SubscriberConfig = ({ streamName, mediaElementId, nodeData }) => {
  const subscriberId =
    streamName + Math.floor(Math.random() * 0x10000).toString(16);

  return {
    ...Red5ProConfig,
    streamName,
    mediaElementId,
    subscriptionId: subscriberId,
    videoEncoding: 'NONE',
    audioEncoding: 'NONE',
    connectionParams: {
      host: nodeData.hostname,
      app: nodeData.scope,
      type: 'subscriber',
      nickname: streamName,
      user: subscriberId,
      token: 'mytoken',
    },
  };
};
