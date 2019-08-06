import React from 'react'; // importing FunctionComponent
import { StyledButton } from './index.style';

interface ButtonProps {
  children: React.ReactChild;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children = 'defaultButton',
  handleClick,
  isPrimary = false,
  isSecondary = false,
  isTertiary = false,
  disabled = false,
}: ButtonProps): React.ReactElement => {
  return (
    <StyledButton
      onClick={handleClick}
      isPrimary={isPrimary}
      isSecondary={isSecondary}
      isTertiary={isTertiary}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
