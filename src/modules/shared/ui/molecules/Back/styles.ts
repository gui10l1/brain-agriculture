import styled from "styled-components";
import Button from "../../atoms/Button";

export const Container = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  height: 32px;
  width: 32px;

  padding: 0;

  background-color: transparent;

  transition: background-color .3s;

  &:hover {
    background-color: var(--color-primary);

    > svg {
      color: white;
    }
  }

  > svg {
    color: black;

    transition: color .3s;
  }
`;