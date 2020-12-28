import {
  SideBarMenuButton,
  SideBarMenuName,
  FavoriteMenuIcon,
  NameMenuIcon,
} from './SideBarMenuButtonStyles.elements';

import React from 'react';

const SideBarMenuItem = ({ data }) => {
  return data.map((e) => (
    <SideBarMenuButton key={e.name} to=''>
      <SideBarMenuName>
        <NameMenuIcon onClick={e.onClick}>{e.name}</NameMenuIcon>
        {e.like ? (
          <FavoriteMenuIcon onClick={e.isNotFavorite}>👍</FavoriteMenuIcon>
        ) : (
          <FavoriteMenuIcon onClick={e.isFavorite}>👎</FavoriteMenuIcon>
        )}
      </SideBarMenuName>
    </SideBarMenuButton>
  ));
};

export default SideBarMenuItem;
