import styled from "styled-components";

export const Wrapper = styled.div`
  background: #f7fafd;
  padding: 20px;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  color: #333;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background: #e1ecf9;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 10px;
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 10px;
`;

export const RemoveButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #a71d2a;
  }
`;