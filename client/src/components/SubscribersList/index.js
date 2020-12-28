import React from 'react';
import { SelectorTitle } from '../MediaSelector/MediaSelectorStyles.elements';
import {
	SubscriberSectionWrapper,
	SubscriberListWrapper,
} from './SubscribersListStyles.elements';

const SubscribersListElements = ({viewers} = {viewers: []}) => {
	
  const susbscribersNames = viewers.map((v, key) => { return (<div key={key}>{v}</div>)});
	return (
		<SubscriberSectionWrapper>
			<SelectorTitle color={(props) => props.theme.DeepGreen}>
				{viewers.length} Subscribers
			</SelectorTitle>
			<SubscriberListWrapper>
				{susbscribersNames} 
			</SubscriberListWrapper>
		</SubscriberSectionWrapper>
	);
};

export default SubscribersListElements;
