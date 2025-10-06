import styled from "styled-components";

export const Container = styled.input`
  font-family: 'Inter', sans-serif;

  padding: 10px 15px;

  border-radius: 8px;

  border: 1px solid #ccc;

  outline: 0;

  &:focus {
    border-color: var(--color-accent);
  }
`;