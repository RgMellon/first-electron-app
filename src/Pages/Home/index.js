import React, { useState, useMemo, useEffect } from 'react';

import { signOut } from '../../store/modules/auth/actions';
import { useDispatch } from 'react-redux';
import { Container, Content } from './styles';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';

export default function Home() {
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  function handlePrevDays() {
    setDate(subDays(date, 1));
  }

  function handleNextDays() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <Content>
        <header>
          <button type="button" onClick={handlePrevDays}>
            <MdChevronLeft size={25} color="#5c37b8" />
          </button>
          <strong> 15/01/2018 </strong>
          <button type="button" onClick={handleNextDays}>
            <MdChevronRight size={25} color="#5c37b8" />
          </button>
        </header>
      </Content>

      <ul>
        <li></li>
        <li> </li>
        <li></li>
        <li></li>
      </ul>
    </Container>
  );
}
