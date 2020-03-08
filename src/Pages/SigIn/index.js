import React from 'react';
import { useDispatch } from 'react-redux';

import { Form } from '@unform/web';
import Input from '../../Components/Input';

import { Content } from './styles';

import { sigInRequest } from '../../store/modules/auth/actions';

export default function SigIn() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.log(data);
    dispatch(sigInRequest(data));
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <Content>
      <img src="https://i.imgur.com/8vMZyRF.png" alt="" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <button type="submit">Fazer login</button>
      </Form>
    </Content>
  );
}
