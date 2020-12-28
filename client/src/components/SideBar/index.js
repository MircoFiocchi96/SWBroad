import React from 'react';
import { SideBarWrapper } from './SideBarStyles.elements';
import SideBarMenuItem from './SideBarMenuButton';

const SideBar = ({ data }) => {
  return (
    <SideBarWrapper>
      <SideBarMenuItem data={data}></SideBarMenuItem>
    </SideBarWrapper>
  );
};

export default SideBar;
