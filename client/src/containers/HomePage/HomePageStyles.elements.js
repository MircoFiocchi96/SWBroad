import styled from 'styled-components';

export const HomePageContainer = styled.div`
	display: grid;
	grid-template-columns: minmax(160px, 585px) auto;
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	min-height: calc(100vh - 80px);
`;

export const HomePageContentContainer = styled.div`
	margin-top: 20px;
	flex: 3;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: space-between;
`;

export const HomePageContentContainerFillers = styled.div`
	width: 400px;
	height: 0;
	margin-left: 4%;
`;
