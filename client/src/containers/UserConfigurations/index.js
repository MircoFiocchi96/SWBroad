import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  userConfig_OpenSelector,
  userConfig_NicknameSelector,
} from './selectors';
import { changeNicknameInputValue, closeUserConfig } from './actions';

import { StyledModal } from '../../components/Global/Modal/ModalStyles.elements';

import { SuccessButton } from '../../components/CreateChannel/CreateChannelStyles.elements';
import CreateChannelModalInput from '../../components/CreateChannel/CreateChannelModalInput';
import { signupAgainstAPI } from '../Auth/actions';

export default function UserConfigurations() {
  const open = useSelector(userConfig_OpenSelector);
  const nickname = useSelector(userConfig_NicknameSelector);
  const dispatch = useDispatch();

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(closeUserConfig());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupAgainstAPI());
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    dispatch(changeNicknameInputValue(e.target.value));
  };

  return (
    <StyledModal isOpen={open}>
      <CreateChannelModalInput
        onChangeHandler={onChangeHandler}
        value={nickname ?? ''}
      />
      <SuccessButton className='successButton' onClick={handleSubmit}>
        Submit
      </SuccessButton>
    </StyledModal>
  );
}
