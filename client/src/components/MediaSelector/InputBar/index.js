import React from 'react';
import {
	InputBarContainer,
	InputBarForm,
	InputBar,
	InputBarButton,
	InputBarLabel,
} from '../../Global/InputWithSetButton/InputWithSetButtonStyles.elements';

export const StreamNameInputBar = () => {
	return (
		<InputBarContainer>
			<InputBarForm role='input'>
				<InputBarLabel htmlFor='input' />
				<InputBar
					type='input'
					placeholder='Stream name'
					autoFocus
					required></InputBar>
				<InputBarButton type='button'>Set</InputBarButton>
			</InputBarForm>
		</InputBarContainer>
	);
};

export const CategoryInputBar = () => {
	return (
		<InputBarContainer>
			<InputBarForm role='input'>
				<InputBarLabel htmlFor='input' />
				<InputBar
					type='input'
					placeholder='Change category'
					autoFocus
					required></InputBar>
				<InputBarButton type='button'>Set</InputBarButton>
			</InputBarForm>
		</InputBarContainer>
	);
};
