import styled from 'styled-components';

export const SideBarWrapper = styled.div`
	height: 100%;
	min-height: calc(100vh - 80px);
	background-color: ${(props) => props.theme.LightGreen};
	display: flex;
	flex-direction: column;
`;
