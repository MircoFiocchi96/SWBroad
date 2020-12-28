import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg) scale(1);
   }
    90% {
        transform: translate(-50%, -50%) rotate(1080deg) scale(1);
   }
    100% {
        transform: scale(0);
   }
`;

const success = keyframes`
from {
		 transform: translate(-50%, -50%) rotate(0) scale(0);
	}
	 to {
		 transform: translate(-50%, -50%) rotate(-45deg) scale(1);
	}
`;

export const SuccessButton = styled.button`
	display: inline-block;
	min-width: 150px;
	background: ${(props) => props.theme.LightGreen};
	color: #fefefe;
	font-size: 1.2em;
	padding: 1em;
	border-radius: 0.7rem;
	position: relative;
	cursor: pointer;
	appearance: none;
	-webkit-appearance: none;
	border: 0;
	transition: border-radius linear 0.05s, width linear 0.05s;
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: flex-end;
	right: 12.5%;
	top: 10%;

	&:focus {
		outline: 0;
	}

	.animate {
		width: 68.1818181818px;
		height: 68.1818181818px;
		min-width: 0;
		border-radius: 50%;
		color: transparent;
	}

	.animate:after {
		position: absolute;
		content: '';
		width: 25px;
		height: 25px;
		border: 4px solid #fefefe;
		border-radius: 50%;
		border-left-color: transparent;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		animation: ${spin} ease-in 2.5s forwards;
		animation-name: spin;
		-webkit-animation-name: ${spin};
		transition-timing-function: ease-in-out;
		-webkit-transition-timing-function: ease-in-out;
		animation-duration: 2.5s;
		-webkit-animation-duration: 2.5s;
		animation-fill-mode: forwards;
		-webkit-animation-fill-mode: forwards;
	}

	.animate.success:before {
		position: absolute;
		content: '';
		width: 25px;
		height: 12.5px;
		border: 4px solid #fefefe;
		border-right: 0;
		border-top: 0;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%) rotate(0deg) scale(0);
		transform: translate(-50%, -50%) rotate(0deg) scale(0);
		-webkit-animation: ${success} ease-in 0.15s forwards;
		animation: ${success} ease-in 0.15s forwards;
		animation-delay: 2.5s;
	}
`;

export const ModalInputWrapper = styled.div`
	width: 100%;
`;
export const ModalInputBoundBox = styled.div`
	position: relative;
`;

export const ModalInputLabel = styled.label`
	display: block;
	position: absolute;
	bottom: 50%;
	color: ${(props) => props.theme.Pink};
	font-weight: inherit;
	font-size: 2.1rem;
	line-height: 1.8rem;
	opacity: 0;
	transform: translate3d(0, 50%), 0 scale(1);
	transform-origin: 0 0;
	transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
		transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
		visibility 0ms 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
		z-index 0ms 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const ModalInputTextField = styled.input`
	display: block;
	margin: 0;
	padding: 0.8rem 1.6rem;
	color: ${(props) => props.theme.DeepGreen};
	width: 100%;
	font-size: ${(props) =>
		props.size === 'lg'
			? (props) => props.theme.fontLg
			: props.size === 'md'
			? (props) => props.theme.fontMd
			: props.size === 'sm'
			? (props) => props.theme.fontSm
			: (props.size = 'md')};
	font-weight: inherit;
	border: none;
	border-radius: 0.7rem;
	transition: box-shadow 300ms;

	&::placeholder {
		color: #b0bec5;
	}

	&:placeholder-shown + ${ModalInputLabel} {
		visibility: hidden;
		z-index: -1;
	}

	&:not(:placeholder-shown)
		+ ${ModalInputLabel},
		&:focus:not(:placeholder-shown)
		+ ${ModalInputLabel} {
		visibility: visible;
		z-index: 1;
		opacity: 1;
		transform: translate3d(0, calc((50%) - (0.8rem * 0.8) - (2.1rem * 1.8)), 0)
			scale(0.8);
		transition: transform 300ms, visibility 0ms, z-index 0ms;
	}
`;
