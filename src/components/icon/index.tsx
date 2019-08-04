import React, { lazy, Suspense } from 'react'; // importing FunctionComponent
import styled, { css } from 'styled-components';

interface IconProps {
  name: string;
}

const TestStyle = styled.svg`
  height: 1rem;
  width: 1rem;
  display: inline-block;
`;

const Icon: React.FC<IconProps> = ({ name }: IconProps): React.ReactElement => {
  const DynamicIcon = lazy((): Promise<any> => import(`../../assets/icons/${name}.tsx`));
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <DynamicIcon />
    </Suspense>
  );
};

export default Icon;
