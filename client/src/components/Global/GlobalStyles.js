import styled, { createGlobalStyle } from 'styled-components';
import SharpGroteskSemiBold15 from './Fonts/SharpGroteskSemiBold15.otf';
import SharpGroteskMedium15 from './Fonts/SharpGroteskMedium15.otf';
import SharpGroteskLight15 from './Fonts/SharpGroteskLight15.otf';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
	outline: 0;
	padding: 0;
	margin: 0;
	border: 0;
	color: ${(props) => props.theme.OffWhite};
	font-family: 'SharpGrotesk';
	};
	
a {
	text-decoration: none;
}

@font-face {
        font-family: 'SharpGrotesk';
		src: url(${SharpGroteskSemiBold15});
		font-weight: bold;
    }
@font-face {
		font-family: 'SharpGrotesk';
		src: url(${SharpGroteskMedium15});
		font-weight: medium;
}
@font-face {
		font-family: 'SharpGrotesk';
		src: url(${SharpGroteskLight15});
		font-weight: lighter;
	}
`;

export const MainContainer = styled.div`
	width: 100%;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export default GlobalStyle;
