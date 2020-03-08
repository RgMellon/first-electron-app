import React from 'react';

import { signOut } from '../../store/modules/auth/actions';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <div>
      <h1>Bisso maluco</h1>
      <button type="button" onClick={handleSignOut}>
        Sair Vazado
      </button>
    </div>
  );
}
