import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarMenuTitle = styled.span``;

export const SideBarMenuName = styled.span`
  position: relative;
  color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.Orange} 0%,
    ${(props) => props.theme.Orange} 50%,
    ${(props) => props.theme.OffWhite} 50%,
    ${(props) => props.theme.OffWhite} 100%
  );
  background-repeat: repeat;
  background-size: 200%;
  background-position: 100% 0;
  -webkit-background-clip: text;
  background-clip: text;
  transition: background-position 300ms;
`;

export const SideBarMenuButton = styled(Link)`
  display: flex;
  justify-content: left;
  padding-left: 40px;
  align-items: center;
  position: relative;
  width: 100%;
  height: 4rem;
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    transform-origin: 100% 0;
    transform: scale3d(0, 1, 1);
    transition: transform 300ms;
  }

  &:hover ${SideBarMenuName} {
    background-position: 0 0;
  }

  &:hover::before {
    transform-origin: 0 0;
    transform: scale3d(1, 1, 1);
  }
`;

export const FavoriteMenuIcon = styled.div`
  margin-right: 30px;
`;

export const NameMenuIcon = styled.div`
  margin-right: 30px;
`;
