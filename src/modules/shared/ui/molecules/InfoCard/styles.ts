import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  max-width: max-content;

  padding: 16px;

  border-radius: 8px;

  gap: 16px;
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
