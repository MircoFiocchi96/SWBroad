import styled from 'styled-components';

export const SelectionWrapper = styled.select`
	width: 100%;
	color: ${(props) => props.theme.DeepGreen};
	font-size: ${(props) => props.theme.fontSm};
	height: 3rem;
	padding: 0 1.6rem;
	border-radius: 0.7rem;
	grid-area: 2 / 1 / 3 / 3;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background-color: ${(props) => props.theme.OffWhite};

	background-image: linear-gradient(45deg, transparent 50%, gray 50%),
		linear-gradient(135deg, gray 50%, transparent 50%),
		linear-gradient(to right, #ccc, #ccc);
	background-position: calc(100% - 20px) calc(1em + 2px),
		calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
	background-size: 5px 5px, 5px 5px, 1px 1.5em;
	background-repeat: no-repeat;

	&::-ms-expand {
		display: none;
	}
`;

export const SelectionOption = styled.option`
	color: ${(props) => props.theme.DeepGreen};
`;
