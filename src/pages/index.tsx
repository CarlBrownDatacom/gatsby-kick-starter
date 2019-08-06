import React, { useState } from 'react';
import Button from '../components/button';

const Home = (): React.ReactElement => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const fetchData = async (): Promise<any> => {
    const response = await fetch('/.netlify/functions/testLambda');
    console.info('*****', response);
    const jsonResponse = await response.json();
    console.info(jsonResponse);
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
