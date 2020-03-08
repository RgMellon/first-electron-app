import React from 'react';

import { useDispatch } from 'react-redux';

import Notification from '../../Components/NotificationMenu';

import { Container, WrapperMenu, MenuLeft, MenuRight } from './styles';

import { signOut } from '../../store/modules/auth/actions';

import { MdExitToApp } from 'react-icons/md';

export default function Menu() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <WrapperMenu>
        <MenuLeft></MenuLeft>

        <MenuRight>
          <Notification />

          <button onClick={handleSignOut}>
            <MdExitToApp color="#5c37b8" size="20" />
          </button>
        </MenuRight>
      </WrapperMenu>
    </Container>
  );
}
