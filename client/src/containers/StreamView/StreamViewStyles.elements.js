import styled from 'styled-components';

export const StreamViewLayout = styled.div`
	display: grid;
	grid-template-columns: minmax(160px, 1fr) 3.853fr minmax(160px, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	min-height: calc(100vh - 80px);
`;

export const StreamViewerLayout = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	min-height: calc(100vh - 80px);
`;

export const SubscriberListWrapper = styled.div`
	display: grid;
	background-color: ${(props) => props.theme.OffWhite};
	padding: 50px;
`;

export const VideoWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto minmax(500px, 100%) auto 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 25px;
	background-color: ${(props) => props.theme.Pink};
	justify-items: center;
	padding: 50px 10%;
`;

export const IframeContainer = styled.div`
	width: 100%;
	background: ${(props) => props.theme.OffWhite};
	padding: 0 1.6rem;
	border-radius: 0.7rem;
	appearance: none;
	transition: all 0.5s cubic-bezier(0, 0, 0.43, 1.49);
	transition-property: width, border-radius;
	z-index: 1;
	position: relative;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.DeepGreen};
`;
