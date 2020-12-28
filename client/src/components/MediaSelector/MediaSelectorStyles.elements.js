import styled from 'styled-components';

export const SelectorTitle = styled.h1`
	font-size: ${(props) => props.theme.fontSizeLg};
	font-weight: bold;
	color: ${(props) => props.color};
`;

export const SelectorLabel = styled.h2`
	font-weight: bold;
`;

export const MediaSelectorWrapper = styled.div`
	background-color: ${(props) => props.theme.LightGreen};
	padding: 50px;
	width: minmax(160px, 585px);
	display: inline-grid;
	grid-template-columns: 100%;
	grid-template-rows: auto auto auto auto 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 25px;
`;

export const InputWrapper = styled.div`
	display: grid;
	grid-row-gap: 10px;
	grid-template-columns: 1fr;
`;

export const TestWrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr 1fr;
	align-self: start;
	grid-row-gap: 10px;
`;

export const LevelTest = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-column-gap: 10px;
	grid-template-columns: auto 1fr;
`;

export const SoundTest = styled.div`
	border-radius: 0.7rem;
	background-color: ${(props) => props.theme.OffWhite};
	width: 100%;
	height: 3.2rem;
`;
