import React, { useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import {
  Container,
  Content,
  LeftContent,
  RightContent,
  Owner,
  Title,
} from './styles';

export default function NewAppointment() {
  const { lastAppointment } = useSelector(state => state.appointment);

  const formated = useMemo(
    () =>
      format(parseISO(lastAppointment.date), "d 'de' MMM 'ás' H:mm aa ", {
        locale: pt,
      }),
    [lastAppointment]
  );

  return (
    <Container>
      <h4> Você possui um novo agendamento </h4>

      <Content>
        <LeftContent>
          <div>
            <img src={lastAppointment.pets.url} alt="" />
          </div>
        </LeftContent>
        <RightContent>
          <h4> {formated}</h4>

          <Title> {lastAppointment.procedure.title} </Title>

          <Owner>
            <b>Dono </b>

            <p> {lastAppointment.user.name} </p>
          </Owner>
        </RightContent>
      </Content>
    </Container>
  );
}
