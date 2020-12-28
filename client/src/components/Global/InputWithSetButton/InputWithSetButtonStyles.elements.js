import styled from 'styled-components';

export const InputBarContainer = styled.div`
	display: flex;
	align-items: center;
	z-index: 20;
`;

export const InputBarForm = styled.form`
	position: relative;
	background: ${(props) => props.theme.LightGreen};
	border-radius: 0.7rem;
	width: 100%;
`;

export const InputBackground = styled.input`
	height: 3rem;
	font-weight: lighter;
	border: 0;
	color: #2f2f2f;
	font-size: ${(props) => props.theme.fontSm};
`;

export const InputBar = styled(InputBackground)`
	width: 100%;
	background: ${(props) => props.theme.OffWhite};
	padding: 0 1.6rem;
	border-radius: 0.7rem;
	appearance: none;
	transition: all 0.5s cubic-bezier(0, 0, 0.43, 1.49);
	transition-property: width, border-radius;
	z-index: 1;
	position: relative;

	&:not(:placeholder-shown) {
		border-radius: 0.7rem 0 0 0.7rem;
		width: calc(100% - 6rem);
	}
`;

export const InputBarButton = styled.button`
	height: 3rem;
	border: 0;
	color: ${(props) => props.theme.OffWhite};
	font-size: 1.3rem;
	display: none;
	position: absolute;
	top: 0;
	right: 0;
	width: 6rem;
	font-weight: bold;
	background: ${(props) => props.theme.LightGreen};
	border-radius: 0 0.7rem 0.7rem 0;
	display: block;
`;
export const InputBarLabel = styled.label`
	position: absolute;
	clip: rect(1px, 1px, 1px, 1px);
	padding: 0;
	border: 0;
	height: 1px;
	width: 30rem;
	overflow: hidden;
`;
