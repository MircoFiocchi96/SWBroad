import Modal from 'styled-react-modal';

export const StyledModal = Modal.styled`
	width: 50rem;
	height:20rem;
    background-color: ${(props) => props.theme.OffWhite};
	border-radius: 0.7rem;
	padding: 4rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	align-items: end;
	justify-items: end;
	
`;
