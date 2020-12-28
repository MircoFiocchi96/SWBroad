import styled from 'styled-components';

const AnimatedButton = styled.button`
	background-color: ${({ buttonColor }) => {
		if (buttonColor === undefined || '') {
			return (props) => props.theme.Orange;
		} else {
			return (buttonColor = (props) => props.buttonColor);
		}
	}};
	color: ${(props) => props.theme.OffWhite};
	cursor: pointer;
	font-size: 1rem;
	border: 0;
	transition: all 0.5s;
	border-radius: 0.7rem;
	width: 10rem;
	position: relative;
	height: 3rem;
	align-self: center;

	&:after {
		content: '${(props) => props.icon}';
		font-weight: normal;
		position: absolute;
		left: 70%;
		top: auto;
		bottom: auto;
		opacity: 0;
		color: ${(props) => props.theme.DeepGreen};
	}

	&:hover {
		background: ${({ hoverColor }) => {
			if (hoverColor === undefined || '') {
				return (props) => props.theme.LightGreen;
			} else {
				return (hoverColor = (props) => props.hoverColor);
			}
		}};
		transition: all 0.5s;
		border-radius: 10px;
		padding: 0.7rem 3.5rem 0.7rem 0.7rem;
		color: ${({ hoverFontColor }) => {
			if (hoverFontColor === undefined || '') {
				return (props) => props.theme.OffWhite;
			} else {
				return (hoverFontColor = (props) => props.hoverFontColor);
			}
		}};
		font-weight: bold;

		&:after {
			opacity: 1;
			transition: all 0.5s;
		}
	}
`;

export default AnimatedButton;
