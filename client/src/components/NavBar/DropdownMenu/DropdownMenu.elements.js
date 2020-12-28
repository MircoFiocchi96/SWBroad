import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropdownMenuOl = styled.ol`
	list-style: none;
	padding: 0;
	margin: 0 0 0 1rem;
	border-radius: 50%;
	z-index: 2;
`;

export const DropdownMenuSubMenu = styled.ol`
	position: absolute;
	top: 100%;
	width: 10rem;
	margin-top: 18px;
	transform-origin: top;
	transform: rotateX(-90deg);
	transition: transform 0.3s linear;
	background-color: ${(props) => props.theme.Pink};
	border-radius: 0.7rem;
`;

export const DropdownMenuButton = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	transition: background 0.1s ease-in-out;

	&:hover ${DropdownMenuSubMenu} {
		transform: rotateX(0deg);
	}

	&:first-child {
		border-radius: 0.7rem;

		&:hover {
			border-radius: 0.7rem 0.7rem 0 0;
		}
	}

	&:not(:first-child):not(:last-child) {
		&:hover {
			border-radius: 0;
		}
	}

	&:last-child {
		&:hover {
			border-radius: 0 0 0.7rem 0.7rem;
		}
	}
`;

export const DropdownMenuLink = styled(Link)`
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${(props) => props.theme.OffWhite};
	text-decoration: none;
	height: 100%;
	width: 100%;
	padding: 0.8rem 1rem;
	transition: all 0.5s;

	&::after {
		content: '${(props) => props.icon}';
		font-weight: normal;
		position: absolute;
		left: 70%;
		top: 27%;
		right: 15%;
		bottom: 0;
		opacity: 0;
	}

	&:hover {
		background: ${(props) => props.theme.OffWhite};
		padding: 0.7rem 2rem 0.7rem 0.7rem;

		color: ${(props) => props.theme.Orange};
		font-weight: bold;
		border-radius: inherit;

		&::after {
			opacity: 1;
			transition: all 0.5s;
		}
	}
`;

export const DropdownMenuPicture = styled(DropdownMenuButton)`
	width: 50px;
	height: 50px;
	background-image: url('https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg');
	background-position: center;
	background-size: cover;
	font-size: 1.3rem;
	padding: 0;
	text-align: center;
	justify-content: center;
	border: 0.2rem solid ${(props) => props.theme.OffWhite};

	&:first-child {
		border-radius: 50% !important;
	}
`;
