import styled from 'styled-components';

const ButtonReset = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  text-align: inherit;
  text-shadow: none;

  &[disabled] {
    text-shadow: none;
    cursor: default;
    pointer-events: none;
  }
`;

export default ButtonReset;
