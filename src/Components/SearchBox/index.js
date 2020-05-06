import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import iconButton from '../../Media/img/binoculo.png';
import { fetchUser } from '../../store/ducks/github';
import Container from './styles';

export default function SearchBox() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  return (
    <Container>
      <input type="search" placeholder="Find Github User" value={username} onChange={(event) => setUsername(event.target.value)} required />
      <button type="button" onClick={() => dispatch(fetchUser(username))} onKeyPress={() => dispatch(fetchUser(username))}>
        <img src={iconButton} alt="Button Icon" />
      </button>
    </Container>
  );
}
