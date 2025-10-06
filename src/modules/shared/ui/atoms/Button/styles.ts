import styled from "styled-components";

export const Container = styled.button`
  border: 0;

  border-radius: 8px;

  padding: 5px 15px;

  font-family: 'Inter', sans-serif;

  background-color: var(--color-primary);
  color: white;

  cursor: pointer;

  &:active {
    opacity: .5;
  }
`;