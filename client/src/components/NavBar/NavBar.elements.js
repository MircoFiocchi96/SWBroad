import styled from 'styled-components';

export const NavContainer = styled.div`
	background: ${(props) => props.theme.DeepGreen};
	height: 80px;
	z-index: 10;
	display: grid;
	grid-auto-flow: column;
	grid-gap: 1.5em;
	padding: 0 40px;
	grid-template-columns: repeat(3, 1fr);
`;

export const NavElements = styled.div`
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 2rem;
	color: #f3e9e2;
	z-index: 20;
`;

export const AppNameAndLogoContainer = styled.div`
	display: grid;
	grid-auto-flow: column;
	justify-content: start;
	align-content: center;
	font-size: 2rem;
	font-weight: bold;
	text-decoration: none;
`;

export const ButtonsContainer = styled.div`
	display: grid;
	justify-content: right;
	align-content: center;
	grid-auto-flow: column;
	grid-gap: 1.5em;
	padding-right: 10%;
`;
