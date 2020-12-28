import styled from 'styled-components';

export const SubscriberSectionWrapper = styled.div`
	text-align: right;
	display: grid;
	grid-template-rows: auto 1fr;
	row-gap: 25px;
	width: 100%;
	height: 100%;
`;

export const SubscriberListWrapper = styled.div`
	background-color: ${(props) => props.theme.Pink};
	height: 100%;
	width: 100%;
	border-radius: 0.7rem;
	padding: 5%;
`;
