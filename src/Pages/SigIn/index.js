import React from 'react';

import { Form } from '@unform/web';
import Input from '../../Components/Input';

import { Content } from './styles';

export default function SigIn() {
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <Content>
      <img
        src="https://www2.uaufi.com/wp-content/uploads/2018/06/logo-site2.png"
        alt=""
      />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <button type="submit">Sign in</button>
      </Form>
    </Content>
  );
}
