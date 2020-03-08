import React from 'react';
import PropTypes from 'prop-types';

// import Header from '~/Components/Header';

import { Wrapper } from './styles';

import NavMenu from '../../../Components/NavMenu';
import Menu from '../../../Components/Menu';

export default function DefaultLayout({ children }) {
  return (
    <>
      <NavMenu />
      <Menu />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

DefaultLayout.prototypes = {
  children: PropTypes.element.isRequired,
};
