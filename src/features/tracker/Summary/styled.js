import styled from "styled-components";

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  flex: 1;
  background-color: #d6e9fb;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

export const Value = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
`;