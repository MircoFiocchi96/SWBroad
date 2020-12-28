import React, {useState} from 'react';
import {
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
  SearchBarLabel,
  SearchBarContainer,
} from './SearchBar.elements';

const SearchBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const onEnter = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      onSearch(searchText);
    }
  }

  return (
    <SearchBarContainer>
      <SearchBarForm role='search'>
        <SearchBarLabel htmlFor='search' />
        <SearchBarInput
          type='search'
          placeholder='Search...'
          autoFocus
          required
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onKeyPress={onEnter}
        ></SearchBarInput>
        <SearchBarButton type='button' onClick={() => onSearch(searchText)}>Go</SearchBarButton>
      </SearchBarForm>
    </SearchBarContainer>
  );
};

export default SearchBar;
