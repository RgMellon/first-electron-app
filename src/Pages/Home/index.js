import React, { useState, useMemo, useEffect } from 'react';

import { useSelector } from 'react-redux';

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
import pt from 'date-fns/locale/pt-BR';

import api from '../../services/api';

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [listAppointments, setListAppointments] = useState([]);

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMM", { locale: pt }),
    [date]
  );

  const { profile } = useSelector(state => state.user);

  useEffect(() => {
    getItemsByDate();
  }, []);

  async function getItemsByDate() {
    // console.tron.log(user.id);
    const response = await api.get(`/dates/appointments/${profile.id}`, {
      params: {
        date,
        page: 1,
        status: 0,
      },
    });

    const { appointments } = response.data;
    setListAppointments(appointments);
  }

  async function handlePrevDays() {
    await setDate(subDays(date, 1));
    getItemsByDate();
  }

  async function handleNextDays() {
    await setDate(addDays(date, 1));
    getItemsByDate();
  }

  return (
    <Container>
      <Content>
        <header>
          <button type="button" onClick={handlePrevDays}>
            <MdChevronLeft size={25} color="#5c37b8" />
          </button>
          <strong> {dateFormated} </strong>
          <button type="button" onClick={handleNextDays}>
            <MdChevronRight size={25} color="#5c37b8" />
          </button>
        </header>
      </Content>

      {listAppointments.length > 0 && (
        <ul>
          {listAppointments.map(item => (
            <li></li>
          ))}
        </ul>
      )}
    </Container>
  );
}
