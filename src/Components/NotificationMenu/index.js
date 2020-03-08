import React, { useState, useEffect, useMemo } from 'react';

import { MdNotifications } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import socketio from 'socket.io-client';

import {
  Container,
  Badge,
  NotificationList,
  ScrollBar,
  PetNotification,
  ContentInfo,
} from './styles';

import { getLastAppointment } from '../../store/modules/appointment/actions';

export default function NotificationMenu() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  const { profile } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const socket = useMemo(() => {
    if (profile) {
      return socketio('https://pedypet.com', {
        query: {
          petshop_id: profile.id,
        },
      });
    }
  }, [profile]);

  useEffect(() => {
    if (profile) {
      socket.on('notification', notification => {
        dispatch(getLastAppointment(profile.id));
        setData([notification]);
      });
    }
  }, [socket, data]);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleVisible}>
        {data.length > 0 && <span> {data.length} </span>}
        <MdNotifications color="#5c37b8" size={20} />
      </Badge>

      {data.length > 0 && (
        <NotificationList visible={visible}>
          <ScrollBar>
            {data.map(item => (
              <PetNotification>
                <img src={item.image} alt="" />
                <ContentInfo>
                  <p> {item.title}</p>
                  <span> {item.date}</span>
                </ContentInfo>
              </PetNotification>
            ))}
          </ScrollBar>
        </NotificationList>
      )}
    </Container>
  );
}
