import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from './index';

afterEach(cleanup);

it('Button click fires handleClick method ', (): any => {
  const buttonEvent = jest.fn();
  const { getByText } = render(
    <Button handleClick={buttonEvent} isPrimary>
      test
    </Button>,
  );

  fireEvent.click(getByText('test'));

  expect(buttonEvent).toHaveBeenCalledTimes(1);
});
