import React, { useEffect, useState } from 'react';
import { ThemeConsumer, ThemeContext } from 'styled-components';
import Button from '../components/button';

const Home = (): React.ReactElement => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const fetchData = async (): void => {
    const response = await fetch('/.netlify/functions/testLambda', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-Pronto-Username': userName,
        'X-Pronto-Password': password,
      },
    });
    console.info('asdfsdfs dsdddddddddddddddddddd ', response);
    const jsonResponse = await response.json();
    console.log('************', jsonResponse);
  };

  return (
    <div style={{}}>
      <form>
        username:
        <input
          type="text"
          value={userName}
          onChange={(e): void => setUserName(e.currentTarget.value)}
          style={{ backgroundColor: 'red' }}
        />
        password:
        <input
          type="text"
          value={password}
          onChange={(e): void => setPassword(e.currentTarget.value)}
          style={{ backgroundColor: 'red' }}
        />
        <Button
          handleClick={(e): void => {
            e.preventDefault();
            fetchData();
          }}
          isPrimary
        >
          our button
        </Button>
      </form>
    </div>
  );
};

export default Home;
