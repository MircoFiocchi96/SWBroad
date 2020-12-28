import React from 'react';
import SideBarContainer from '../SideBar';
import {
	HomePageContainer,
	HomePageContentContainer,
	HomePageContentContainerFillers,
} from './HomePageStyles.elements';
import StreamsList from '../StreamsList';

export default function HomePage() {
	return (
		<HomePageContainer>
			<SideBarContainer />
			<HomePageContentContainer>
				<StreamsList />
				<HomePageContentContainerFillers />
				<HomePageContentContainerFillers />
				<HomePageContentContainerFillers />
			</HomePageContentContainer>
		</HomePageContainer>
	);
}
