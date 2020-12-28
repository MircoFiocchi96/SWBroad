import React from 'react';
import { SubscriberListWrapper } from '../../containers/StreamView/StreamViewStyles.elements';
import SubscribersListElements from '../../components/SubscribersList';
import SubscriberCard from '../../components/SubscribersList/SubscriberListCard/index';
import { streams } from '../StreamsList/mockedData';
import { useSelector } from 'react-redux';
import { StreamView_Viewers } from '../StreamView/selectors';

export default function SubscribersList() {
  const viewers = useSelector(StreamView_Viewers);
  return (
    <SubscriberListWrapper>
      <SubscribersListElements viewers={viewers} />
    </SubscriberListWrapper>
  );
}
