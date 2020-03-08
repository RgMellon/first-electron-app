import React, { useState, useMemo, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Container, Content, Item, Left, Right, Title, Owner } from './styles';
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

import NewAppointment from '../../Components/NewAppointment';

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [listAppointments, setListAppointments] = useState([]);

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMM", { locale: pt }),
    [date]
  );

  const { profile } = useSelector(state => state.user);
  const { lastAppointment } = useSelector(state => state.appointment);

  useEffect(() => {
    getItemsByDate(new Date());
  }, []);

  async function getItemsByDate(nDate) {
    const response = await api.get(`/dates/appointments/${profile.id}`, {
      params: {
        date: nDate,
        page: 1,
        status: 0,
      },
    });

    const { appointments } = response.data;

    const newData = appointments.map(item => ({
      ...item,
      formatedDate: format(parseISO(item.date), "d 'de' MMM 'ás' H:mm aa ", {
        locale: pt,
      }),
    }));

    setListAppointments(newData);
  }

  async function handlePrevDays() {
    const sub = subDays(date, 1);
    await setDate(sub);

    getItemsByDate(sub);
  }

  async function handleNextDays() {
    const add = addDays(date, 1);
    await setDate(add);
    // await setDate(addDays(date, 1));
    getItemsByDate(add);
  }

  return (
    <Container>
      {lastAppointment && <NewAppointment />}

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
            <Item>
              <li>
                <Left>
                  <div>
                    <img src={item.pets.url} alt="" />
                  </div>
                </Left>
                <Right>
                  <h4> {item.formatedDate}</h4>

                  <Title> {item.procedure.title} </Title>

                  <Owner>
                    <b>Dono </b>

                    <p> {item.user.name}</p>
                  </Owner>
                </Right>
              </li>
            </Item>
          ))}
        </ul>
      )}
    </Container>
  );
}
