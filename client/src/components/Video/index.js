import React from 'react';
import { VideoContainer } from './VideoStyles.elements';
import { SelectorTitle } from '../MediaSelector/MediaSelectorStyles.elements';

const Video = ({ id, autoplay = true, muted = true }) => {
	return (
		<>
			<SelectorTitle>Video feed</SelectorTitle>
			<VideoContainer>
				<video id={id} autoPlay={autoplay} muted={muted} />
			</VideoContainer>
		</>
	);
};

export default Video;
