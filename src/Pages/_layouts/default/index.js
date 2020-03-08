import React from 'react';
import PropTypes from 'prop-types';

// import Header from '~/Components/Header';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.prototypes = {
  children: PropTypes.element.isRequired,
};
