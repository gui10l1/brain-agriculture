import styled from "styled-components";
import type { IButton } from "./interfaces";

const colors = {
  success: 'var(--color-primary)',
  danger: "#F44336",
  warning: "#FF9800",
}

export const Container = styled.button<IButton>`
  border: 0;

  border-radius: 8px;

  padding: 5px 15px;

  font-family: 'Inter', sans-serif;

  background-color: ${props => colors[props.variant || 'success']};
  color: white;

  cursor: pointer;

  &:active {
    opacity: .5;
  }
`;