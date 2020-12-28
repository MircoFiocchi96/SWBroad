import React from 'react';
import {
  DropdownMenuOl,
  DropdownMenuButton,
  DropdownMenuSubMenu,
  DropdownMenuLink,
  DropdownMenuPicture,
} from './DropdownMenu.elements';

const DropdownMenu = ({ logout, myFavoriteCategory }) => {
  return (
    <DropdownMenuOl>
      <DropdownMenuPicture>
        <DropdownMenuSubMenu>
          <DropdownMenuButton>
            <DropdownMenuLink to='/' icon='🖐🏻'>
              Account
            </DropdownMenuLink>
          </DropdownMenuButton>
          <DropdownMenuButton>
            <DropdownMenuLink to='/' icon='🧾'>
              My History
            </DropdownMenuLink>
          </DropdownMenuButton>
          <DropdownMenuButton>
            <DropdownMenuLink onClick={myFavoriteCategory} to='/' icon='🔖'>
              My Categories
            </DropdownMenuLink>
          </DropdownMenuButton>
          <DropdownMenuButton>
            <DropdownMenuLink onClick={logout} icon='📤'>
              Sign Out
            </DropdownMenuLink>
          </DropdownMenuButton>
        </DropdownMenuSubMenu>
      </DropdownMenuPicture>
    </DropdownMenuOl>
  );
};

export default DropdownMenu;
