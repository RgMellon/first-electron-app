import React from 'react';

import Notification from '../../Components/Notification';

import { Container, WrapperMenu, MenuLeft, MenuRight } from './styles';

export default function Menu() {
  return (
    <Container>
      <WrapperMenu>
        <MenuLeft></MenuLeft>

        <MenuRight>
          <Notification />
        </MenuRight>
      </WrapperMenu>
    </Container>
  );
}
