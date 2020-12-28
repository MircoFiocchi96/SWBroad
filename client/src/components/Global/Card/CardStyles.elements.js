import styled from 'styled-components';

export const CardContainer = styled.div`
	background-color: ${(props) => props.theme.OffWhite};
	width: 400px;
	max-height: 600px;
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	border-radius: 0.7rem;
	margin-left: 4%;
`;

export const CardBackgroundImg = styled.div`
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 11rem;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	box-sizing: border-box;
`;

export const CardProfileImg = styled.svg`
	background-color: white;
	width: 8rem;
	height: 8rem;
	border-radius: 50%;
	transform: translateY(50%);
	transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
	background-position: center;
	background-size: 130px 130px;
	background-repeat: no-repeat;
	z-index: 1;
	&:hover {
		transform: translateY(50%) scale(1.3);
	}
`;

export const CardMenu = styled.div`
	width: 100%;
	height: 5.5rem;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	box-sizing: border-box;
`;

export const CardTitle = styled.h1`
	font-weight: bold;
	font-size: 1.2rem;
	text-align: center;
	padding: 0 0.7rem 1.2rem;
	color: ${(props) => props.theme.DeepGreen};
`;

export const CardName = styled.h2`
	text-align: center;
	padding: 0 2rem 0.5rem;
	margin: 0;
	font-weight: bold;
	font-size: 2rem;
`;

export const CardViewersTitle = styled.h3`
	font-weight: normal;
	font-size: 1.2rem;
	text-align: center;
	padding: 0 0.7rem 1.2rem;
	color: ${(props) => props.theme.DeepGreen};
`;

export const CardClickables = styled.div`
	padding: 0 2rem 1.2rem;
	display: flex;
	flex-direction: column;
	order: 99;
`;

export const CardViewersCount = styled.h2`
	display: flex;
	width: 50%;
	text-align: center;
	margin: auto;
	box-sizing: border-box;
	text-decoration: none;
	padding: 0.5rem;
	flex-direction: column;
	border-radius: 0.7rem;
	transition: background-color 0.5s ease-in-out, color 1s ease-in-out;
	background-color: ${(props) => props.theme.OffWhite};
	color: ${(props) => props.theme.Pink};
	font-weight: bold;
	transform-origin: bottom;
	transform: scaleY(1.3);

	&:hover {
		background-color: ${(props) => props.theme.DeepGreen};
		color: ${(props) => props.theme.OffWhite};
	}
`;

export const CardWatchStream = styled.button`
	color: white;
	font: inherit;
	font-weight: bold;
	background-color: ${(props) => props.theme.LightGreen};
	width: 70%;
	border: none;
	padding: 1rem;
	outline: none;
	box-sizing: border-box;
	border-radius: 0.7rem;
	font-size: 1.3rem;
	margin: auto;
	transition: background-color 0.3s ease-in-out,
		transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

	&:hover {
		background-color: ${(props) => props.theme.Orange};
		transform: scale(1.1);
	}

	&:active {
		background-color: ${(props) => props.theme.Orange};
		transform: scale(1);
	}
`;

export const CardDescription = styled.p`
	text-align: center;
	padding: 0 2rem 2.5rem;
	order: 100;
	height: 100px;
`;
