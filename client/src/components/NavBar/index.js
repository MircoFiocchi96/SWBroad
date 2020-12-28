import React from 'react';
import { NavContainer } from './NavBar.elements';
import SearchBar from './SearchBar';
import { AppNameAndLogoContainer, ButtonsContainer } from './NavBar.elements';
import { Link } from 'react-router-dom';

export default function NavBar({ buttons, onSearch }) {
	return (
		<NavContainer>
			<AppNameAndLogoContainer>
				<Link to='/'>Broadcast 📡</Link>
			</AppNameAndLogoContainer>
			<SearchBar onSearch={onSearch} />
			<ButtonsContainer>{buttons}</ButtonsContainer>
		</NavContainer>
	);
}
