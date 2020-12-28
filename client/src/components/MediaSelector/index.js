import React from 'react';
import {
	SelectorLabel,
	SelectorTitle,
	MediaSelectorWrapper,
	InputWrapper,
	SoundTest,
	TestWrapper,
	LevelTest,
} from './MediaSelectorStyles.elements';
import AnimatedButton from '../Global/AnimatedButton';
import {
	StreamNameInputBar,
	CategoryInputBar,
} from '../MediaSelector/InputBar';

import InputSelect from '../MediaSelector/InputSelect';

const MediaSelectorStyles = () => {
	return (
		<MediaSelectorWrapper>
			<SelectorTitle>Media selector</SelectorTitle>

			<InputWrapper>
				<StreamNameInputBar></StreamNameInputBar>
				<CategoryInputBar></CategoryInputBar>
			</InputWrapper>
			<InputWrapper>
				<SelectorLabel>Video</SelectorLabel>
				<InputSelect></InputSelect>
			</InputWrapper>

			<TestWrapper>
				<SelectorLabel>Microphone</SelectorLabel>
				<InputSelect />
				<LevelTest>
					<AnimatedButton hoverColor={(props) => props.theme.Pink} icon='🎤'>
						Test mic
					</AnimatedButton>
					<SoundTest />
				</LevelTest>
			</TestWrapper>

			<TestWrapper>
				<SelectorLabel>Speaker</SelectorLabel>
				<InputSelect />
				<LevelTest>
					<AnimatedButton hoverColor={(props) => props.theme.Pink} icon='🔊'>
						Test speaker
					</AnimatedButton>
					<SoundTest />
				</LevelTest>
			</TestWrapper>
		</MediaSelectorWrapper>
	);
};

export default MediaSelectorStyles;
