import React, { useEffect } from 'react';
import Button from '../components/button';

const Home = (): React.ReactElement => {
  useEffect((): void => {
    fetch('/.netlify/functions/testLambda?testing="here is my message"')
      .then((response): promise<any> => response.json())
      .then(console.log);
  }, []);

  return (
    <div style={{}}>
      Hello world Yeah gatsby!
      <Button handleClick={(): void => console.log('button clicked')} isPrimary>
        our button
      </Button>
    </div>
  );
};

export default Home;
