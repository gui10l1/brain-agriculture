import styled from "styled-components";
import type { IRow } from "./interfaces";

export const Container = styled.div<IRow>`
  display: flex;
  gap: 16px;

  justify-content: ${props => props.align === 'center' ? 'center' : props.align === 'left' ? 'flex-start' : 'flex-end'};

  & + & {
    margin-top: 16px;
  }
`;