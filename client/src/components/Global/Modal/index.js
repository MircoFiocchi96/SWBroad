import React, { useState } from 'react';
import { StyledModal } from './ModalStyles.elements';
import ChannelCreator from '../../CreateChannel';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <StyledModal isOpen={isOpen}>
      <ChannelCreator></ChannelCreator>
    </StyledModal>
  );
}
