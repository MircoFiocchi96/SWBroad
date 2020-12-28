import React from 'react';
import {
	CardContainer,
	CardBackgroundImg,
	CardProfileImg,
	CardMenu,
	CardName,
	CardTitle,
	CardClickables,
	CardViewersCount,
	CardWatchStream,
	CardDescription,
} from '../../Global/Card/CardStyles.elements';

const SubscriberCard = ({ streams } = { streams: [] }) => {
	let backgroundImageSelector = '';
	let profilePictureSelector = '';
	return (
		streams.length > 0 &&
		streams.map((stream, key) => (
			<CardContainer key={key}>
				{(() => {
					switch (stream.category) {
						case 'Code':
							backgroundImageSelector =
								'https://www.dataiku.com/wp-content/uploads/2019/10/chris-ried-ieic5Tq8YMk-unsplash-1618x1080.jpg';
							break;
						case 'Gaming':
							backgroundImageSelector =
								'https://images.tech.co/wp-content/uploads/2019/12/19112253/future-gaming-708x400.jpg';
							break;
						case 'Sports':
							backgroundImageSelector =
								'https://www.abc.net.au/cm/rimage/12236578-16x9-large.jpg?v=2';
							break;
						case 'Cooking':
							backgroundImageSelector =
								'https://images.indianexpress.com/2019/07/cooking_759.jpg';
							break;
						default:
							backgroundImageSelector =
								'https://www.pwc.co.uk/entertainment-media/assets/ent-media-2020-hero.jpg';
					}
				})()}
				<CardBackgroundImg
					style={{ backgroundImage: `url(${backgroundImageSelector})` }}>
					{(() => {
						switch (stream.profilePicture) {
							case undefined:
							case '':
								profilePictureSelector =
									'https://secure.gravatar.com/avatar/a2bbf191a58629f141850123542fefc5?s=96&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png&r=pg';
								break;
							default:
								profilePictureSelector = stream.profilePicture;
						}
					})()}
					<CardProfileImg
						viewBox='0 0 100 100'
						style={{
							backgroundImage: `url(${profilePictureSelector})`,
						}}></CardProfileImg>
				</CardBackgroundImg>
				<CardMenu />
				<CardName>{stream.userId}</CardName>
				<CardTitle>{stream.title}</CardTitle>
				<CardClickables>
					<CardViewersCount>{stream.viewers}</CardViewersCount>
					<CardTitle>Viewers</CardTitle>
					<CardWatchStream>Watch</CardWatchStream>
				</CardClickables>
				<CardDescription>{stream.description}</CardDescription>
			</CardContainer>
		))
	);
};

export default SubscriberCard;
