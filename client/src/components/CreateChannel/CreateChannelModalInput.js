import React from 'react';
import {
  ModalInputWrapper,
  ModalInputBoundBox,
  ModalInputLabel,
  ModalInputTextField,
} from './CreateChannelStyles.elements';

const CreateChannelModalInput = ({ onChangeHandler, value }) => {
  return (
    <ModalInputWrapper>
      <ModalInputBoundBox>
        <ModalInputTextField
          type='username'
          placeholder='Your desired nickname'
          onChange={onChangeHandler}
          value={value}
          size='lg'
        />
        <ModalInputLabel>Nickname</ModalInputLabel>
      </ModalInputBoundBox>
    </ModalInputWrapper>
  );
};

export default CreateChannelModalInput;
