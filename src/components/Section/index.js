import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RightColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;