import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { HOST } from '../StreamView/constants';
import { startStream } from './actions';

import { PublisherConfig, SubscriberConfig } from '../../config/red5Pro';

import Video from '../../components/Video';

import { VideoWrapper } from '../StreamView/StreamViewStyles.elements';
import { publisherIFrameConfig } from '../../config/iframe';
import { Red5ProConfig } from '../../config/red5Pro';

import { IframeContainer } from '../StreamView/StreamViewStyles.elements';
import AnimatedButton from '../../components/Global/AnimatedButton';
import { displayNotification } from '../Notifications/actions';
import { hostConnected } from '../App/actions';

export default function Red5Content({ role, nickname, connected }) {
  const [started, setStarted] = useState(false);
  const videoElementID = 'red5ProMediaElement';
  const dispatch = useDispatch();

  const configure = useCallback(
    async ({ Red5Element, method, streamName, mediaElementId }) => {
      try {
        const operation = role === HOST ? 'broadcast' : 'subscribe';
        const nodeDataURL = `https://${Red5ProConfig.host}/streammanager/api/${Red5ProConfig.apiVersion}/event/${Red5ProConfig.nodeApp}/${streamName}?action=${operation}`;

        const response = await fetch(nodeDataURL);
        const nodeData = await response.json();

        if (response.status === 200) {
          await Red5Element.init(
            method({
              streamName,
              mediaElementId,
              nodeData,
            })
          );
          if (role === HOST) Red5Element.publish();
          else Red5Element.subscribe();
        } else {
          dispatch(displayNotification({ message: 'Host is not streaming.' }));
        }
      } catch (error) {
        dispatch(
          displayNotification({
            message: `error at initializing red5 stream ${error}`,
            type: 'error',
          })
        );
      }
    },
    [role, dispatch]
  );

  const elementCreationMethod = useMemo(() => {
    return role === HOST
      ? window.red5prosdk.RTCPublisher
      : window.red5prosdk.RTCSubscriber;
  }, [role]);

  const method = useMemo(
    () => (role === HOST ? PublisherConfig : SubscriberConfig),
    [role]
  );

  const Red5Element = useMemo(() => {
    return new elementCreationMethod();
  }, [elementCreationMethod]);

  const configureAndInit = useCallback(async () => {
    if (elementCreationMethod) {
      await configure({
        Red5Element,
        method,
        streamName: nickname,
        mediaElementId: videoElementID,
      });
      if (role === HOST) setStarted(true);
    }
  }, [elementCreationMethod, method, nickname, Red5Element, role, configure]);

  const unpublish = useCallback(async () => {
    await Red5Element.unpublish();
    setStarted(false);
  }, [Red5Element]);

  const handleClick = () => {
    dispatch(startStream());
    configureAndInit();
    setStarted(true);
  };

  useEffect(() => {
    if (role !== HOST && connected) {
      configureAndInit();
    }
  }, [configureAndInit, role, connected]);

  return (
    <VideoWrapper>
      <Video id={videoElementID}>
        <div className='video-container'></div>
      </Video>

      {role === HOST && (
        <>
          <AnimatedButton
            style={{ justifySelf: 'end' }}
            onClick={started ? unpublish : handleClick}
            icon='📷'
            buttonColor={(props) => props.theme.DeepGreen}
            hoverColor={(props) => props.theme.LightGreen}
          >
            {started ? 'Stop' : 'Start'}
          </AnimatedButton>
          <PublisherIFrame
            url={publisherIFrameConfig.host}
            nickname={nickname}
          />
        </>
      )}
    </VideoWrapper>
  );
}

function PublisherIFrame({ nickname, url }) {
  return (
    <IframeContainer>
      {`<iframe
                src="${url}/${nickname}">
            </iframe>`}
    </IframeContainer>
  );
}
