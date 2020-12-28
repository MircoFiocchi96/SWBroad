import React from 'react';
import NavBar from '../../components/NavBar';
import AnimatedButton from '../../components/Global/AnimatedButton';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserConfig } from '../UserConfigurations/actions';
import DropdownMenu from '../../components/NavBar/DropdownMenu';
import { Auth_AccessTokenSelector } from '../Auth/selectors';
import { App_LoadingSelector } from '../App/selectors';
import { userLogin, userLogout } from '../Auth/actions';
import { searchStreams } from '../StreamsList/actions';
import { fetchFavoriteStreams } from './actions';

export default function NavBarContainer() {
  const dispatch = useDispatch();
  const authenticated = useSelector(Auth_AccessTokenSelector);
  const loading = useSelector(App_LoadingSelector);
  const buttons = [];
  if (!loading) {
    buttons.push(getButtons(authenticated, dispatch));
  }

  return (
    <NavBar
      buttons={buttons}
      onSearch={(text) => dispatch(searchStreams({ q: text }))}
    ></NavBar>
  );
}

function getButtons(authenticated, dispatch) {
  const buttons = [
    <AnimatedButton
      icon='🎥'
      key='start-stream'
      onClick={() => dispatch(loadUserConfig())}
    >
      Start Stream
    </AnimatedButton>,
  ];

  buttons.push(
    authenticated ? (
      <DropdownMenu
        myFavoriteCategory={() =>
          dispatch(fetchFavoriteStreams({ favorite: true }))
        }
        logout={() => dispatch(userLogout())}
      />
    ) : (
      <AnimatedButton
        buttonColor={(props) => props.theme.Pink}
        icon='🙋🏻‍♂️'
        key='user-login'
        onClick={() => dispatch(userLogin())}
      >
        Login
      </AnimatedButton>
    )
  );
  return buttons;
}
