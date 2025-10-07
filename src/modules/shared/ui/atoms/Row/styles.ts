import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;

  & + & {
    margin-top: 16px;
  }
`;