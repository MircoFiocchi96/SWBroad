import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Auth_NicknameSelector,
  Auth_AccessTokenSelector,
} from '../Auth/selectors';
import { HOST, PARTICIPANT } from './constants';

import {
  StreamViewLayout,
  StreamViewerLayout,
} from './StreamViewStyles.elements';
import MediaSelector from '../MediaSelector';
import Red5Content from '../Red5Content';
import SubscribersList from '../SubscribersList';
import { App_WSConnectedSelector, App_WSConnectionID } from '../App/selectors';

import { AddViewer, viewerDisconnect } from '../App/actions';
import { StreamView_StartedSelector } from './selectors';
import { fetchStream } from './actions';

export default function StreamView() {
  const nickname = useSelector(Auth_NicknameSelector);
  const token = useSelector(Auth_AccessTokenSelector);
  const WSConnected = useSelector(App_WSConnectedSelector);
  const WSConnectionID = useSelector(App_WSConnectionID);
  const hostConnected = useSelector(StreamView_StartedSelector);

  const { URLNickname } = useParams();
  const role = nickname === URLNickname ? HOST : PARTICIPANT;
  const dispatch = useDispatch();

  const dataInfo = useMemo(() => {
    return token
      ? { nickname: URLNickname, token }
      : {
          nickname: URLNickname,
          name: nickname + Math.floor(Math.random() * 0x10000).toString(16),
        };
  }, [token, URLNickname, nickname]);

  useEffect(() => {
    if (WSConnected) {
      const publisher = role === HOST;
      dispatch(AddViewer({ connectionId: WSConnectionID, publisher: publisher, ...dataInfo }));
    }
  }, [dispatch, dataInfo, WSConnected, WSConnectionID, role]);

  useEffect(() =>{
      if(role === PARTICIPANT){
        dispatch(fetchStream(URLNickname));
      }
  }, [dispatch, URLNickname, role]);

  useEffect(() => {
    return function(){
      if(role === PARTICIPANT){
        dispatch(viewerDisconnect(dataInfo));
      }
    }
  }, [dispatch, role, dataInfo])

  return (
    <>
      {role === HOST ? (
        <StreamViewLayout>
          {role === HOST && <MediaSelector />}
          <Red5Content
            role={role}
            nickname={URLNickname}
            connected={hostConnected}
          />
          <SubscribersList />
        </StreamViewLayout>
      ) : (
        <StreamViewerLayout>
          <Red5Content
            role={role}
            nickname={URLNickname}
            connected={hostConnected}
          />
          <SubscribersList />
        </StreamViewerLayout>
      )}
    </>
  );
}
